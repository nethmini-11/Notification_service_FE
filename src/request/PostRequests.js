
function PostFileMail() {
    const saveFileMailURL = "http://localhost:8080/api/v5/kafka-mail-sender/send-file-mail";
  
    return saveFileMailURL ;
  }

  function PostHtmlMail() {
    const saveHtmlMailURL = "http://localhost:8080/api/v5/kafka-mail-sender/send-html-mail";
  
    return saveHtmlMailURL ;
  }

  function PostMailTemplate() {
    const saveMailTemplateURL = "http://localhost:8080/api/v5/manage-mail/create-email-content";
  
    return saveMailTemplateURL ;
  }

  function PostSchedularMail() {
    const saveSchedularMailURL = "http://localhost:8082/scheduleEmail";
  
    return saveSchedularMailURL ;
  }

export {PostFileMail ,PostHtmlMail,PostMailTemplate,PostSchedularMail};
