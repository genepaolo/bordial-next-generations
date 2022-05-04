var express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const nodemailer = require("nodemailer");
const creds = require(__dirname + "/credentials.js");
const path = require('path')
const mongoose = require('mongoose');
const { isBuffer } = require("util");
mongoose.connect("mongodb+srv://bngadmin:bngadmin@cluster0.whqkk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
// Schema
const testimonialSchema = {
  name: String,
  rating: Number,
  msg: String,
  date: Date
};
// Model
const Testimonial = mongoose.model("testimonial", testimonialSchema);
const loadTestimonials = 5;

// const testimonial1 = new Testimonial({
//   name: "Gene",
//   rating: 5,
//   msg: "Top tier customer service! Definitely would recommend to a friend",
//   date: new Date(2022,1,1)
// });
// const testimonial2 = new Testimonial({
//   name: "Paolo",
//   rating: 4,
//   msg: "Okay tier customer service! Website could definitely use some improvement",
//   date: new Date(2022,2,15)
// });

// testimonial1.save();
// testimonial2.save();

// const testimonials = {body:[
//   {
//     name: "Gene",
//     rating: 5,
//     msg: "Great business and customer service!"
//   },
//   {
//     name: "Paolo",
//     rating: 4,
//     msg: "Okay business and customer service!"
//   }
// ]};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

app.all('*',express.static(path.join(__dirname,'../build')))


const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 5000;
app.set('port', port);

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port: ',port);
});

app.post("/api/testimonials/", function(req,res){
  // var today = new Date().toJSON();
  // var dd = String(today.getDate()).padStart(2,'0');
  // var mm = String(today.getMonth()+1).padStart(2,'0');
  // var yyyy = today.getFullYear();
  // today = yyyy + '-' + dd
  const testimonial = new Testimonial({
    name: req.body.name,
    rating: req.body.rating,
    msg: req.body.msg,
    date: new Date()
  })
  console.log(testimonial);
  try{
    let newTest = testimonial.save();
    res.send(newTest);
  }catch(err){
    res.status(400).send(err);
  }
});

app.get("/api/testimonials/", function(req,res){
  Testimonial.find({}).limit(loadTestimonials).sort({'date':-1}).exec(function(err, foundTestimonials){
    if(err) console.log(err);
    // This always stays at 1
    Testimonial.find({}).limit(1).sort({'date':1}).exec(function(err, first){
      if(err) console.log(err);
      res.send([foundTestimonials,first]);
    });
  });
});

app.get("/api/testimonials/:date", function(req,res){
  const date = req.params.date;
  console.log(req.params);
  Testimonial.find({
      date: {
        $lt: Date.parse(date)
      }

  }).limit(loadTestimonials).sort({'date':-1}).exec(function(err, foundTestimonials){
    if(err) console.log(err);
    res.send(foundTestimonials);
  });
});
app.post("/api/contact-us/", function(req,res){
    console.log(req.body);
    const {name,email,msg} = req.body;
    mail(name,email,msg).catch(err => console.log(err));
});

app.use(/^\/(?!api).*/, express.static(path.join(__dirname,'../build')))



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

