// // import { MailtrapClient } from "mailtrap";
// // import dotenv from "dotenv";

// // dotenv.config();
// // const TOKEN = "afb15ea37a5082660427657adec20c9b";
// // const client = new MailtrapClient({
// //   token: TOKEN,
// //   testInboxId: 3376628,
// // });

// // const sender = {
// //   email: "mailtrap@demomailtrap.com",
// // };
// // const recipients = [
// //   {
// //     email: "jacobclinton2234@gmail.com",
// //   },
// // ];

// // client.testing
// //   .send({
// //     from: sender,
// //     to: recipients,
// //     subject: "You are awesome!",
// //     html: "Congrats for sending test email with Mailtrap!",
// //     category: "Integration Test",
// //   })
// //   .then(console.log, console.error);

// import Nodemailer from "nodemailer";
// import { MailtrapTransport } from "mailtrap";

// const TOKEN = "8aadc93d505c280cd811ad07cd239a04";

// export const mailTransport = Nodemailer.createTransport(
//   MailtrapTransport({
//     token: TOKEN,
//   })
// );

// export const sender = {
//   address: "hello@demomailtrap.com",
//   name: "Mailtrap Test",
// };
// // const recipients = ["jacobclinton2234@gmail.com"];

// // mailTransport
// //   .sendMail({
// //     from: sender,
// //     to: recipients,
// //     subject: "You are awesome!",
// //     html: "Congrats for sending test email with Mailtrap!",
// //     category: "Integration Test",
// //   })
// //   .then(console.log, console.error);



import { MailtrapClient } from "mailtrap"

const TOKEN = "8aadc93d505c280cd811ad07cd239a04";

export const mailClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
// const recipients = [
//   {
//     email: "jacobclinton2234@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);