require('dotenv').config();

const faker= require('faker');
const {countUsers, addUser, addFakeUsers} = require('./helpers/helpers.js');

const express = require('express');
const bodyParser  = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

//SSEEDING DATABASE
let data=[];
for(let i=0; i<500; i++){
  data.push([
    faker.internet.email(),
    faker.date.past()
  ]);
}

addFakeUsers(data);



// app.get("/", function(req, res){
//   // Find count of users in DB
//   countUsers();
// });

// app.post("/register", function(req, res){
//   addUser;
// });

// app.listen(8080, function(){
//   console.log("Server running on 8080!");
// });

