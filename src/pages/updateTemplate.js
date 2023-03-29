import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalState } from "../global/UserGlobalData";
import { useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function ViewEmailContent() {
  const { templateName } = useParams();
  const [mailArray, setMailArray] = useState([]);
  const [mailList, setMailList] = useState([]);
  //const [subject, setSubject] = useState("");
  const getTemplateDetailUrl = `http://localhost:8080/api/v5/manage-mail/view-email-content?templateName=${templateName}`;

  useEffect(() => {
    axios
      .get(getTemplateDetailUrl, {})
      .then((response) => {
        var mailData = response.data;
        setMailArray(mailData);
        console.log("mailData: ", mailData);

        if (Array.isArray(mailData)) {
          // Check if mailData is an array
          setMailArray(mailData);
          setMailList(mailData);
          //setSubject(mailData[0].subject);
        } else {
          console.log("mailData is not an array");
        }
      })
      .catch(function (error) {
        if (error.response) {
          console.log("error.response.data", error.response.data);
          console.log("error.response.status", error.response.status);
        } else if (error.request) {
          console.log("error.request", error.request);
        } else {
          console.log("error.message", error.message);
        }
      });
  }, [getTemplateDetailUrl, templateName]);

  const subject = mailArray.subject;
  const template = mailArray.templateName;
  const content = mailArray.content;

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
                    <div style={{ marginLeft: "2%" }}>Update Template 📝</div>
                  </h4>

                  <div class="container">
                    <form id="contact-form" role="form">
                      <div class="controls">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="form_name">Template Name *</label>
                              <input
                                id="form_lastname"
                                type="text"
                                name="surname"
                                class="form-control"
                                value={template}
                                required="required"
                                data-error="Email subject is required."
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
                                value={subject}
                                required="required"
                                data-error="Email subject is required."
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
                                  data={content}
                                  //onChange={(event, editor) => {
                                  //setData(editor.getData());
                                  //}}
                                />
                              </div>
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
}

export default ViewEmailContent;
