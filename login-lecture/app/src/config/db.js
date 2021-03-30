const mysql = require("mysql");

const db = mysql.createConnection({
    host: "login-lectu********2.rds.amazonaws.com",
    user: "admin",
    password: "******",
    database: "login_lecture",
});

db.connect();

module.exports = db;
