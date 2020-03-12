// Global
const mysql = require("mysql");
// Connect
var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else{
    connection = mysql.createConnection({
        port: 3306,
        host: "kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "u9p5q3633h7jglpg",
        password: "p5te1ld5yj2c7164",
        database: "y53e01k5ede9mrwy"
    });
};
connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// Export Connection for our ORM to use
module.exports = connection
