const exp = require("constants");
const express = require("express");
const app = express();

const nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/enquiryForm.html");
});

app.post("/", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jbbmailer@gmail.com",
      pass: "ujwnkqejtkspomws",
    },
  });
  const mailOptions = {
    from: req.body.email,
    to: "contact@jballbathrooms.co.uk",

    subject: `New enquiry regarding ${req.body.subject}`,
    text: `You have a new enquiry from ${req.body.name}, ${req.body.email}, ${req.body.contact} and they wrote: ${req.body.message}.`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
