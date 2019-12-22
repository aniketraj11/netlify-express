'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
var cors = require("cors");

app.use(cors());

const router = express.Router();
var flag = 0;

var data = [
    { sunrise: "05:02:00", 
     sunset: "17:02:00", 
     moonrise: "18:02:00", 
     Moonset: "04:02:00", 
     tithi: "Shukla Dashmi",
     nakshatra: "Anuradha",
     yog: "Endra",
     hindu_maah: "Shraavan",
     paksha: "Shukla Paksha", },
    { sunrise: "06:02:00", 
     sunset: "18:02:00", 
     moonrise: "19:02:00", 
     Moonset: "05:02:00", 
     tithi: "Krishna Paksha",
     nakshatra: "Swati",
     yog: "Atiganda",
     hindu_maah: "Shraavan",
     paksha: "Shukla Paksha", }
]

/*
router.get('/', (req, res) => {
  let index = 0;
    if(flag == 0){
        index = 0;
        flag = 1;
    }
    else{
        index = 1;
        flag = 0;
    }
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data[index]));
});




app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
*/

app.get("/panchang", function(req, res, next) {
    let index = 0;
    if(flag == 0){
        index = 0;
        flag = 1;
    }
    else{
        index = 1;
        flag = 0;
    }
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data[index]));
});

module.exports = app;
module.exports.handler = serverless(app);
