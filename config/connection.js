// Set up MySQL connection.
const mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: 'j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: 'xu6wqsq78nmg1gf9',
        password: 'jv792ma5kq5x8go5',
        database: 's1o2gw4sv59jze4g'
    });
}


// Make connection.
connection.connect((err) => {
    if (err) {
        console.error(`Error connecting: ${err.stack}`)
        return;
    }
})

// Export connection for our ORM to use.
module.exports = connection;