const mysql= require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
});

// //Connection reporting
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
 
//   console.log('connected as id ' + connection.threadId);
// });

//Adding new users
exports.addUser= function(email){
  let person = {
    email: email
  }
  let q = 'INSERT INTO users SET ?'
  connection.query(q,person,function (err, results){
    if (err) throw err;
  }); 
},

//seeding fake users
exports.addFakeUsers= function(peopleArray){
  
  let q = 'INSERT INTO users (email, created_at) VALUES ?';
  connection.query(q,[peopleArray],function (err, results){
    if (err) throw err;
    console.log(results);
  }); 
}

//Selecting the count
exports.countUsers= function(){
  let q = 'SELECT COUNT(*) AS total_users FROM users;';
  connection.query(q, function (error, results, fields) {
    if (error) throw error;
    console.log(results[0].total_users);
  });
}