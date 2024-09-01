const { MailtrapClient } = require("mailtrap");

const TOKEN = "a0015125a1dfb87864c5c44cb2a41604";

const mailtrapClient= new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Test",
};

module.exports = {
  mailtrapClient,
  sender
}
// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);

