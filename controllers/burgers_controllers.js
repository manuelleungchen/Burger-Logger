// Import the required modules
const express = require("express");
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {

    burger.create("burger_name, devoured", [req.body.name, req.body.devoured], (result) => {

        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;
    burger.update("devoured = true", condition, (result) => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();

    })
})

router.delete("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;
    burger.delete(condition, (result) => {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();

    })
})

// Export routes for server.js to use.
module.exports = router;




