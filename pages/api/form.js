require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      console.log("45", err, token);
      if (err) {
        reject();
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  return transporter;
};

export default async function handler(req, res) {
  const body = req.body;

  if (!body.name || !body.email) {
    return res.json({ data: "Name or email was not found" });
  }
  const transporter = await createTransporter();

  const myNotification = {
    from: "kvizualisation@gmail.com",
    to: "kvizualisation@gmail.com",
    subject: "Sending Email using Node.js[nodemailer]",
    text: body.name + " " + body.email + " That was easy!",
  };

  const clientNotification = {
    from: "kvizualisation@gmail.com",
    to: body.email,
    subject: "Sending Email using Node.js[nodemailer]",
    text: body.name + " " + body.email + " That was easy!",
  };

  const mailsToSend = [myNotification, clientNotification];
  mailsToSend.map((mail) =>
    transporter.sendMail(mail, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    })
  );

  res.json({ data: `${body.name} ${body.email}` });
}
