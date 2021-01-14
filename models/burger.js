// Import ORM 
const orm = require("../config/orm");

const burger = {
    // This function will get all burgers using selectAll() from orm object
    all (cb) {
        orm.selectAll ("burgers", (res) => {
            cb(res);
        })
    },

    // This function will create a new burger using insertOne() from orm object
    create (cols, vals, cb) {
        orm.insertOne ("burgers", cols, vals, (res) => {
            cb(res);
        })
    },

    // This function will update a particular burger using updateOne() from orm object
    update (colVals, condition, cb) {
        orm.updateOne ("burgers", colVals, condition, (res) => {
            cb(res);
        })
    },

    // This function will delete a particular burger using deleteOne() from orm object
    delete (condition, cb) {
        orm.deleteOne ("burgers", condition, (res) => {
            cb(res);
        })
    }
}

// Export the burger.js
module.exports = burger;