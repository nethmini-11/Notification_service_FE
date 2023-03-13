import React, { useState, useEffect } from "react";
import { GetTemplateDetails } from "../request/GetRequests";
import { useGlobalState } from "../global/UserGlobalData";
import { Link } from "react-router-dom";
import axios from "axios";

const AllMails = () => {
  const [mailArray, setMailArray] = useState([]);
  const [mailList, setMailList] = useGlobalState("mailList");
  const getMailURL = GetTemplateDetails();

  
  useEffect(() => {
    axios
      .get(getMailURL, {})
      .then((response) => {
        var mailData = response.data;
        setMailArray(mailData);
        setMailList(mailData);
        console.log("mailData: ", mailData);
        console.log("Response: ", response.data);
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
  }, [getMailURL, mailArray.length]);

  return (
    <div>
      <div className="table-container">
        <br />
        <h2>ALL MAIL TEMPLATES 📨</h2>
        <br />
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>#Id</th>
              <th>template_name</th>
              <th>mail_subject</th>
              <th> mail_html_content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mailArray.map((mail, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{mail.templateName}</td>
                  <td>{mail.subject}</td>
                  <td>{mail.content}</td>
                  <td>
                  <Link to={`/update/template/${mail.templateName}`} className="btn btn-success">Edit</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMails;
