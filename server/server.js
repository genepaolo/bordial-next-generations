var express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const nodemailer = require("nodemailer");
const creds = require(__dirname + "/credentials.js");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), function() {
    console.log('listening');
});

app.post("/api/contact-us/", function(req,res){
    console.log(req.body);
    const {name,email,msg} = req.body;
    mail(name,email,msg).catch(err => console.log(err));
});


// Mail
// async..await is not allowed in global scope, must use a wrapper
async function mail(name, sender, msg) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: " mtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: sender, // sender address
    to: creds.email, // list of receivers
    subject: `BNG Contact Us -${name}`, // Subject line
    text: msg, // plain text body
  });
//   console.log("Message sent: %s", info.messageId);
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

