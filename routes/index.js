var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Nmasdfs' });
});

router.get("/register", function (req, res) {
  res.render('register', {
    title: 'Registration Page',
    name: '',
    email: '',
    password: '',
    mobileNo: ''
  })
});
router.post("/systemAdminLogin", function (req, res) {
  res.render('systemAdminLogin', {
    title: 'system Admin Login Page',
    email: '',
    password: ''
  })
});
router.get("/addCompany", function (req, res) {
  res.render('addCompany', {
    title: 'Register Company page',
    companyName: '',
    companyLogo: '',
    companyAddress: '',
    companyContactEmail: ''
  })
});
router.get("/addBranch", function (req, res) {
  res.render('addBranch', {
    title: 'Register Branch page',
    branchAddress: '',
    branchLocation: '',
    branchPhoneNumber: '',
    branchImage: ''
  })
});

router.get("/addCompany", function (req, res) {
  res.render('addCompany', {
    title: 'Register Company page',
    companyName: '',
    companyLogo: '',
    companyAddress: '',
    companyContactEmail: ''
  })
});
router.get("/addBranch", function (req, res) {
  res.render('addBranch', {
    title: 'Register Branch page',
    branchAddress: '',
    branchLocation: '',
    branchPhoneNumber: '',
    branchImage: ''
  })
});

router.post("/addCompany", function (req, res) {
  res.render('addCompany', {
    title: 'Register Company page',
    companyName: '',
    companyLogo: '',
    companyAddress: '',
    companyContactEmail: ''
  })
});
router.post("/addBranch", function (req, res) {
  res.render('addBranch', {
    title: 'Register Branch page',
    branchAddress: '',
    branchLocation: '',
    branchPhoneNumber: '',
    branchImage: ''
  })
});

router.put("/addCompany", function (req, res) {
  res.render('addCompany', {
    title: 'Register Company page',
    companyName: '',
    companyLogo: '',
    companyAddress: '',
    companyContactEmail: ''
  })
});
router.delete("/addBranch", function (req, res) {
  res.render('addBranch', {
    title: 'Register Branch page',
    branchAddress: '',
    branchLocation: '',
    branchPhoneNumber: '',
    branchImage: ''
  })
});
router.delete("/addBranch", function (req, res) {
  res.render('addBranch', {
    title: 'Register Branch page',
    branchAddress: '',
    branchLocation: '',
    branchPhoneNumber: '',
    branchImage: ''
  })
});

//   var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'kipkemoifred2018@gmail.com',
//     pass: ''
//   }
// });

// var mailOptions = {
//   from: 'kipkemoifred2018@gmail.com',
//   to: 'kipkemoifred2018@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

//db

// const { Pool } = require('pg')
// const pool = new Pool({
//   user: '{user}',
//   host: '{host}',
//   database: '{database}',
//   password: '{password}',
//   port: {port},
// })
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res) 
//   pool.end() 
// })

module.exports = router;
