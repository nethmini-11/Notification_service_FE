import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import DateTimePicker from "react-datetime-picker";
import axios from "axios";
import { PostSchedularMail } from "../request/PostRequests";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const ScheduleSingleMail = () => {
  const [receiverEmail, setReceiverEmail] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [title, setTitle] = useState("");
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [value, onChange] = useState(new Date());
  const postSchedularMailUrl = PostSchedularMail();

  const handleDateTimeChange = (newValue) => {
    setDateTime(newValue.toISOString());
  };

  const handleButton = async (e) => {
    // Check if all necessary fields are filled out
    if (
      !productName ||
      !productQuantity ||
      !productUrl ||
      !receiverEmail ||
      !bannerUrl ||
      !title ||
      !templateName ||
      !dateTime
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill out all fields!",
        allowOutsideClick: false,
        allowEscapeKey: false,
        timer: 4000,
      });
    } else {
      // If all fields are filled out, call postMailTemplate function
      await postSchedularMail();
    }
  };
  // Function that makes a POST request to server to send a new file email
  function postSchedularMail() {
    // Use axios library to make POST request to server
    axios
      .post(postSchedularMailUrl, {
        dateTime: dateTime.toISOString(),
        email: receiverEmail,
        isActive: true,
        mailContentDto: {
          content: {},
          ordersList: [
            {
              productName: productName,
              productQuantity: productQuantity,
              productUrl: productUrl,
            },
          ],

          templateName: templateName,
          topBannerAdUrl: bannerUrl,
        },
        subject: title,
      })
      .then((res) => {
        console.log(res);
        const { data, status } = res;
        if (status === 200) {
          // If request is successful, display success message using SweetAlert2 library
          Swal.fire({
            icon: "success",
            title: data,
            text: "🙂",
            allowOutsideClick: false,
            allowEscapeKey: false,
            timer: 4000,
          });
        }
      });
  }

  return (
    <div>
      <div className="report">
        <div class="container" style={{ marginLeft: "25%" }}>
          <div class="row " style={{ marginTop: "0%", marginBottom: "4%" }}>
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
                    <div style={{ marginLeft: "5%" }}>
                      Schedule Single Template ⏰
                    </div>
                  </h4>
                  <div class="container">
                    <form id="contact-form" role="form">
                      <div class="controls">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_name">Receiver's Email *</label>
                              <input
                                id="form_name"
                                type="email"
                                name="name"
                                class="form-control"
                                placeholder="example@gmail.com *"
                                required="required"
                                data-error="Email is required."
                                onChange={(e) => {
                                  setReceiverEmail(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_email">Select Date *</label>
                              <div class="form-control">
                                <DateTimePicker
                                  onChange={setDateTime}
                                  value={dateTime}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_need">
                                Select template name *
                              </label>
                              <select
                                id="form_need"
                                name="need"
                                class="form-control"
                                required="required"
                                data-error="Template name is required."
                                onChange={(e) => {
                                  setTemplateName(e.target.value);
                                }}
                              >
                                <option value="" selected disabled>
                                  --Select--
                                </option>
                                <option>
                                  order_confirmation_email_to_customer
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_email">Mail Title *</label>
                              <input
                                id="form_email"
                                type="text"
                                name="email"
                                class="form-control"
                                placeholder="Lightweight Mobility  *"
                                required="required"
                                data-error="Product name is required."
                                onChange={(e) => {
                                  setTitle(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_email">Product name *</label>
                              <input
                                id="form_email"
                                type="text"
                                name="email"
                                class="form-control"
                                placeholder="Lightweight Mobility  *"
                                required="required"
                                data-error="Product name is required."
                                onChange={(e) => {
                                  setProductName(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_email">Product quantity *</label>
                              <input
                                id="form_email"
                                type="text"
                                name="email"
                                class="form-control"
                                placeholder="5 *"
                                required="required"
                                data-error="Product quantity is required."
                                onChange={(e) => {
                                  setProductQuantity(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_email">
                                Product image url *
                              </label>
                              <input
                                id="form_email"
                                type="text"
                                name="email"
                                class="form-control"
                                placeholder=" http://www.example.com/index.html *"
                                required="required"
                                data-error="Product image  is required."
                                onChange={(e) => {
                                  setProductUrl(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_email">
                                Top banner image url *
                              </label>
                              <input
                                id="form_email"
                                type="text"
                                name="email"
                                class="form-control"
                                placeholder=" http://www.example.com/index.html *"
                                required="required"
                                data-error="Top banner image is required."
                                onChange={(e) => {
                                  setBannerUrl(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <input
                              type="submit"
                              class="btn btn-send  pt-2 btn-block"
                              value="Send Notification ✅"
                              onClick={(e) => {
                                handleButton(e);
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

export default ScheduleSingleMail;
