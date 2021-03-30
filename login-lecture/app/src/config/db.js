const mysql = require("mysql");

const db = mysql.createConnection({
    host: "login-lecture-azimut.cbw1mxub6jhp.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "!07260726Wjd",
    database: "login_lecture",
});

db.connect();

module.exports = db;