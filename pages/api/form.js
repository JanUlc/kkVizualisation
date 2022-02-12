
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log("body: ", body);

  // Both of these are required.
  if (!body.name || !body.email) {
    return res.json({ data: "Name or email was not found" });
  }
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "kvizualisation@gmail.com",
        pass: "Kk123Vizualisation321!",
      },
    })
  );

  const myNotification = {
    from: "kvizualisation@gmail.com",
    to: 'kvizualisation@gmail.com',
    subject: "Sending Email using Node.js[nodemailer]",
    text: body.name + body.email + " That was easy!",
  };

  const clientNotification = {
    from: "kvizualisation@gmail.com",
    to: body.eamil,
    subject: "Sending Email using Node.js[nodemailer]",
    text: body.name + body.email + " That was easy!",
  };

  const mailsToSend = [myNotification, clientNotification]
  mailsToSend.map(mail => transporter.sendMail(mail, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  })) 

  
  // Found the name.
  res.json({ data: `${body.name} ${body.email}` });
}
