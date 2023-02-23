import React from "react";

const ScheduleSingleMail = () => {
    return (
        <div>
        <div className="report">
          <div class="container" style={{ marginLeft: "25%" }}>
            <div class="row " style={{ marginTop: "15%", marginBottom: "4%" }}>
              <div class="col-lg-7 mx-auto">
                <div
                  class="card mt-2  mx-auto p-4 bg-light"
                  style={{
                    boxShadow:" rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                    border: "none",
                  }}
                >
                  <div class="card-body bg-light">
                    <h4 style={{borderLeft:"6px solid #000000" , fontWeight:"bold" , color:"#0ac74a"}}> <div style={{marginLeft:"5%"}}>Send File Mails ✉️</div></h4>
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
                                  type="email"
                                  name="email"
                                  class="form-control"
                                  placeholder="example *"
                                  required="required"
                                  data-error="Title is required."
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
                                  type="email"
                                  name="email"
                                  class="form-control"
                                  placeholder="Lightweight Mobility  *"
                                  required="required"
                                  data-error="Product name is required."
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label for="form_email">Product quantity *</label>
                                <input
                                  id="form_email"
                                  type="email"
                                  name="email"
                                  class="form-control"
                                  placeholder="5 *"
                                  required="required"
                                  data-error="Product quantity is required."
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
                                  type="email"
                                  name="email"
                                  class="form-control"
                                  placeholder=" http://www.example.com/index.html *"
                                  required="required"
                                  data-error="Product image  is required."
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
                                />
                              </div>
                            </div>
  
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                <label for="form_email">File name *</label>
                                <input
                                  id="form_email"
                                  type="email"
                                  name="email"
                                  class="form-control"
                                  placeholder="example.pdf *"
                                  required="required"
                                  data-error="File name is required."
                                />
                              </div>
                            </div>
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
                                >
                                  <option value="" selected disabled>
                                    --Select--
                                  </option>
                                  <option>order_confirmation_email_to_customer</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <div class="form-group">
                                <label for="form_message">Base64 encoded file *</label>
                                <textarea
                                  id="form_message"
                                  name="message"
                                  class="form-control"
                                  placeholder="Paste encoded file."
                                  rows="4"
                                  required="required"
                                  data-error="base64 encoded file is required."
                                ></textarea>
                              </div>
                            </div>
  
                            <div class="col-md-12">
                              <input
                                type="submit"
                                class="btn btn-send  pt-2 btn-block"
                                value="Send Notification ✅"
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