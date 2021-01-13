// Import MySQL connection.
const connection = require('./connection.js');

// Helper function for SQL syntax.
const printQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};

// Object for all our SQL statement functions.
const orm = {
    // Get all rows
    selectAll(tabletInput, cb) {
        const queryString = `SELECT * FROM ${tabletInput};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    // Insert a row
    insertOne(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;

        queryString += ` ( ${cols.toString()}) VALUES (${printQuestionMarks(vals.length)}) `;
        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },

    // Update a row
    updateOne(table, colVals, condition, cb) {
        let queryString = `UPDATE ${table} SET ${colVals} WHERE ${condition};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }
}


// Export the orm object for the model
module.exports = orm;