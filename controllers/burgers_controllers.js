const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    // cat.all(function(data) {
    //   var hbsObject = {
    //     cats: data
    //   };
    burger.all(function(data){
        let burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
    
    // });
  });
  
// Export routes for server.js to use.
module.exports = router;