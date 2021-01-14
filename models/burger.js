// Import ORM 
const { update } = require("../../utor-tor-fsf-pt-09-2020-u-c/13-MVC/01-Activities/16-MvcExample/config/orm.js");
const orm = require("../config/orm.js");

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
    }
}

// Export the burger.js
module.exports = burger;