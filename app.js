const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(cookieParser());

app.use(function (req, res, next) {
  const cookie1 = req.cookies.cookieName1;
  const cookie2 = req.cookies.cookieName2;
  
  const getRandomNumber = () => { 
      let randomNumber = Math.random().toString(); 
      return randomNumber.substring(2, randomNumber.length)
  };
   
  if (cookie1 === undefined) {
    res.cookie('cookieName1', getRandomNumber(), { maxAge: 900000, httpOnly: true });
  } 
  if (cookie1 === undefined) {
    res.cookie('cookieName2', getRandomNumber(), { maxAge: 900000, httpOnly: true });
  } 

  next(); 
});

app.use(express.static("src"));

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});