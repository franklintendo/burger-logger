const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data){
        let burgerObject = {
            burgers: data
        };
        res.render("index", burgerObject);
    });
    
    // });
  });

router.post("/api/burgers", function(req, res) {

    console.log("Burger Controllers: " + req.body.name);

    burger.create(req.body.name, function(result){
        console.log("Result: " + result);
        res.json({ id: result.insertId });
    });
});
  
// Export routes for server.js to use.
module.exports = router;