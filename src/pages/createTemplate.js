import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";
import Swal from "sweetalert2";
import { PostMailTemplate } from "../request/PostRequests";

const CreateTemplate = () => {
  //const [readOnly, setReadOnly] = useState(true);
  const [templateName, setTemplateName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [data, setData] = useState ("<html > <top-banner-advertisement> <h4>Hey <non-editable><receiver-name></non-editable>,</h4> <p>Thank you for placing a rental request on Cloud of Goods. We're waiting for one of our partners to accept your order. You will hear back from us as soon as the order is accepted. In the meantime, please review the details below and let us know of any changes. Please note that your credit card will not be charged until the order is accepted.</p> <h2>Order Summary Order #<non-editable><order-no></non-editable></h2> <non-editable><item-details-section></non-editable> <h3>Delivery Date: <non-editable><delivery-date></non-editable></h3> <h3>Delivery Time: <non-editable><delivery-time></non-editable></h3> <h3>Delivery Location: <non-editable><delivery-location-address></non-editable></h3> <h3>Pickup Date: <non-editable><pick-up-date></non-editable></h3> <h3>Pickup Time: <non-editable><pick-up-time></non-editable></h3> <h3>Pickup Location: <non-editable><pickup-location-address></non-editable></h3> <h2>Price Summary</h2> <h5>Total rental amount <non-editable><total-rental-amount></non-editable></h5> <h5>Damage Waiver <non-editable><damage-waiver-amount></non-editable></h5> <h4>Total paid <non-editable><total-paid-amount></non-editable></h4> <p>Please thoroughly review the above reservation details. If you have any questions or would like to modify the order, please reply directly to this email.</p> <p>* This does not happen often, but if the requested delivery times are already taken, <non-editable><vendor-name></non-editable> will give you a call to make adjustments.</p> <h2>Rules & Responsibilities</h2> <h4>● All items are carefully inspected before and after rentals. Any damage upon return is subject to additional fees. </h4> <h4>● You may reschedule delivery or change the order details only if <non-editable><vendor-name></non-editable> allows such options.</h4> <h4>● You may cancel or modify this order by logging into your Cloud of Goods account or sending an email to info@cloudofgoods.com with the subject: [CANCEL] <order-no> or [Modify] <order-no>. All cancellations are subject to our cancellation policy.</h4> <h4>We’ll see you then, cheers!</h4></br> - <non-editable><mail-send-by></non-editable> </html>");
  const postMailTemplateUrl = PostMailTemplate();

  const handleButton = () => {
    if (!templateName || !subjectName || !data) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all fields!",
      });
    } else {
      Swal.fire("Good job!", "You clicked the button!", "success");
    }
  };
  function postMailTemplate() {
    axios.post(postMailTemplateUrl, {
      editedEmailContent: data,
      editedEmailSubject: subjectName,
      templateName: templateName,
    });
  }

  
  
  return (
    <div>
      <div className="template">
        <div class="container" style={{ marginLeft: "24%" }}>
          <div class="row">
            <div class="col-lg-7 mx-auto">
              <div
                class="card mt-2  mx-auto p-4 bg-light"
                style={{
                  boxShadow: " rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                  border: "none",
                }}
              >
                <div class="card-body bg-light">
                  <h4
                    style={{
                      borderLeft: "6px solid #000000",
                      fontWeight: "bold",
                      color: "#0ac74a",
                    }}
                  >
                    {" "}
                    <div style={{ marginLeft: "2%" }}>Create Template 📝</div>
                  </h4>
                  <div class="container">
                    <form id="contact-form" role="form">
                      <div class="controls">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_name">Template Name *</label>
                              <input
                                id="form_name"
                                type="text"
                                name="name"
                                class="form-control"
                                placeholder="order_delivered_email_to_customer *"
                                required="required"
                                data-error="Template name is required."
                                onChange={(e) => {
                                  setTemplateName(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_lastname">Email Subject *</label>
                              <input
                                id="form_lastname"
                                type="text"
                                name="surname"
                                class="form-control"
                                placeholder="We received your rental request. Here’s what happens next*"
                                required="required"
                                data-error="Email subject is required."
                                onChange={(e) => {
                                  setSubjectName(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label for="form_message">
                                Create Your Template *
                              </label>
                              
                              <div className="editor-container">
                                <CKEditor
                                  editor={ClassicEditor}
                                  data={data}
                                  onChange={(e) => {
                                    setData(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <input
                              type="submit"
                              class="btn btn-send  pt-2 btn-block"
                              value="Create Template ✅"
                              onClick={(e) => {
                                postMailTemplate();
                                handleButton();
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplate;
