const nodemailer = require("nodemailer");

export async function handler(event, context, callback) {
  // Parse the JSON text received.
  const body = JSON.parse(event.body);

  // Build an HTML string to represent the body of the email to be sent.
  const html = `<div style="margin: 20px auto;">${body.body}</div>`;

  // Generate test SMTP service account from ethereal.email. Only needed if you
  // don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.linkweb.fr",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'technique@linkweb.fr', // generated ethereal user
      pass: 'kJ26!0s0aX', // generated ethereal password
    },
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"☁️ The Cloud ☁️" <technique@linkweb.fr>',
      to: body.email,
      subject: "Nouveau mail",
      text: body.body,
      html: html,
    });
    // Log the result
    console.log(info);
    callback(null, { statusCode: 200, body: JSON.stringify(info) });
  } catch (error) {
    // Catch and log error.
    callback(error);
  }
};