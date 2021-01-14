// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sql123456789',
    database: 'burgers_db'
});

// Make connection.
connection.connect((err) => {
    if (err) {
        console.error(`Error connecting: ${err.stack}`)
        return;
    }
})

// Export connection for our ORM to use.
module.exports = connection;