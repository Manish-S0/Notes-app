const { mailtrapClient } = require("./mailtrap.js");
const { sender } = require("./mailtrap.js");

const VERIFICATION_EMAIL_TEMPLATE = require("./emailTemplate.js");

const sendVerificationEmail =async (verificationToken, email) => {
  
  const recipients = [
    {
      email: email
    }
  ];

  try{
    const response=await mailtrapClient.send({
      from: sender,
      to: recipients,
      subject: "Verify your email address",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
      category:"Email Verification",
    });
    console.log('Email sent successfully',response);
  }catch(err){
    console.log(err);
  }
}

const sendWelcomeEmail =async () => {
  
  const recipients = [
    {
      email: "manishsah27337@gmail.com"
    }
  ];  

  try{
    const response=await mailtrapClient.send({
      from: sender,
      to: recipients,
      
      template_uuid: "c2267746-de65-4b97-bb2b-d6238bf46029",
    template_variables: {
      "company_info_name": "Notes App",
      "name": "Manish",},
      
    });
    console.log('Email sent successfully',response);
  }catch(err){
    console.error(`Error sending welcome email`, err);
  }

}
// sendWelcomeEmail()

module.exports = {
  sendVerificationEmail,
  sendWelcomeEmail

}