import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const UpdateMessageContent = () => {
  return (
    <div>
      <div className="message">
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
                    <div style={{ marginLeft: "2%" }}>
                      Update Message Content 📝
                    </div>
                  </h4>
                  <div class="container">
                    <form id="contact-form" role="form">
                      <div class="controls">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_name">Template Name *</label>
                              <select
                                id="form_need"
                                name="need"
                                class="form-control"
                                required="required"
                                data-error="Please specify your need."
                              >
                                <option value="" selected disabled>
                                  --Select--
                                </option>
                                <option>
                                  order_confirmation_email_to_customer
                                </option>
                                <option>
                                  order_delivered_email_to_customer
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_lastname">Message Title *</label>
                              <input
                                id="form_lastname"
                                type="text"
                                name="surname"
                                class="form-control"
                                placeholder="Hey <non-editable><user-name></non-editable>, your order has been accepted*"
                                required="required"
                                data-error="Email subject is required."
                              />
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label for="form_message">Message Body *</label>
                              {/* <textarea id="form_message" name="message" class="form-control" rows="10" required="required" value="<html> <top-banner-advertisement> <h4>Hey <non-editable><receiver-name></non-editable>,</h4> <p>Thank you for placing a rental request on Cloud of Goods. We're waiting for one of our partners to accept your order. You will hear back from us as soon as the order is accepted. In the meantime, please review the details below and let us know of any changes. Please note that your credit card will not be charged until the order is accepted.</p> <h2>Order Summary Order #<non-editable><order-no></non-editable></h2> <non-editable><item-details-section></non-editable> <h3>Delivery Date: <non-editable><delivery-date></non-editable></h3> <h3>Delivery Time: <non-editable><delivery-time></non-editable></h3> <h3>Delivery Location: <non-editable><delivery-location-address></non-editable></h3> <h3>Pickup Date: <non-editable><pick-up-date></non-editable></h3> <h3>Pickup Time: <non-editable><pick-up-time></non-editable></h3> <h3>Pickup Location: <non-editable><pickup-location-address></non-editable></h3> <h2>Price Summary</h2> <h5>Total rental amount <non-editable><total-rental-amount></non-editable></h5> <h5>Damage Waiver <non-editable><damage-waiver-amount></non-editable></h5> <h4>Total paid <non-editable><total-paid-amount></non-editable></h4> <p>Please thoroughly review the above reservation details. If you have any questions or would like to modify the order, please reply directly to this email.</p> <p>* This does not happen often, but if the requested delivery times are already taken, <non-editable><vendor-name></non-editable> will give you a call to make adjustments.</p> <h2>Rules & Responsibilities</h2> <h4>● All items are carefully inspected before and after rentals. Any damage upon return is subject to additional fees. </h4> <h4>● You may reschedule delivery or change the order details only if <non-editable><vendor-name></non-editable> allows such options.</h4> <h4>● You may cancel or modify this order by logging into your Cloud of Goods account or sending an email to info@cloudofgoods.com with the subject: [CANCEL] <order-no> or [Modify] <order-no>. All cancellations are subject to our cancellation policy.</h4> <h4>We’ll see you then, cheers!</h4></br> - <non-editable><mail-send-by></non-editable> </html>" data-error="base64 encoded file is required." >
                      
</textarea> */}
                              <input
                                id="form_lastname"
                                type="text"
                                name="surname"
                                class="form-control"
                                placeholder="We’re delighted that your order has been accepted by <non-editable><vendor-name></non-editable>. They’ll be in touch with you to make delivery arrangements. Your order is now confirmed.*"
                                required="required"
                                data-error="Email subject is required."
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <input
                              type="submit"
                              class="btn btn-send  pt-2 btn-block"
                              value="Create Template✅"
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

export default UpdateMessageContent;
