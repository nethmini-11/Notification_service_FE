import React, { useState } from "react";
import axios from "axios";
import { PostHtmlMail } from "../request/PostRequests";

const HtmlMail = () => {
  const [receiverEmail, setReceiverEmail] = useState("");
  const [receiverMobile, setReceiverMobile] = useState("");
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [templateName, setTemplateName] = useState("");
  const postHtmlMailUrl = PostHtmlMail();

  function postHtmlMail() {
    axios.post(postHtmlMailUrl, {
      mail: {
        content: {},
        ordersList: [
          {
            productName: productName,
            productQuantity: productQuantity,
            productUrl: productUrl,
          },
        ],
        receiverEmail: receiverEmail,
        topBannerAdUrl: bannerUrl,
      },
      mobileNo: receiverMobile,
      notification: {
        content: {
          title: title,
        },
      },
      templateName: templateName,
      userId: userId,
    });
  }

  return (
    <div>
      <div className="report">
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
                    <div style={{ marginLeft: "2%" }}>Send HTML Mails ✉️</div>
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
                                type="text"
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
                              <label for="form_lastname">
                                Receiver's Mobile Number *
                              </label>
                              <input
                                id="form_lastname"
                                type="text"
                                name="surname"
                                class="form-control"
                                placeholder="+941111111 *"
                                required="required"
                                data-error="Mobile number is required."
                                onChange={(e) => {
                                  setReceiverMobile(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_email">User Id *</label>
                              <select
                                id="form_need"
                                name="need"
                                class="form-control"
                                required="required"
                                data-error="Please specify your need."
                                onChange={(e) => {
                                  setUserId(e.target.value);
                                }}
                              >
                                <option value="" selected disabled>
                                  --Select--
                                </option>
                                <option>100</option>
                                <option>200</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_email">Title *</label>
                              <input
                                id="form_email"
                                type="text"
                                name="email"
                                class="form-control"
                                placeholder="example *"
                                required="required"
                                data-error="Title is required."
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
                                type="email"
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
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <input
                              type="submit"
                              class="btn btn-send  pt-2 btn-block"
                              value="Send Notification ✅"
                              onClick={(e) => {
                                postHtmlMail();
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

export default HtmlMail;
