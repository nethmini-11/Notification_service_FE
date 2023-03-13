import { useGlobalState } from "../global/UserGlobalData";

function GetTemplateDetails() {

  const [templateName , setTemplateName]=useGlobalState("templateName");

    const getTemplateDetailsUrl ='http://localhost:8080/api/v5/manage-mail/template-names';
  
    return getTemplateDetailsUrl ;
  }

  function GetTemplateDetailBytemplateName() {

    const [templateName , setTemplateName]=useGlobalState("templateName");
  
      const getTemplateDetailUrl =`http://localhost:8080/api/v5/manage-mail/view-email-content?templateName=${templateName}`;
    
      return getTemplateDetailUrl ;
    }

  export {GetTemplateDetails,GetTemplateDetailBytemplateName};