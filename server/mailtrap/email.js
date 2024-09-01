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

module.exports = {
  sendVerificationEmail
}