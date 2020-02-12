const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    create: function(userBurger, cb) {
        console.log("Value passed from controller to burger js: " + userBurger);
        
        orm.insertOne("burgers", "burger_name", userBurger, function(res){
            // if (err) {
            //     // console.log(res);
            //     throw err;
            // }
            console.log("BURGER JS IS WORKING");
            cb(res);
        });
    }
}

module.exports = burger;