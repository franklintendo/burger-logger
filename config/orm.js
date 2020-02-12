const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

const orm = {
    selectAll: function(table, cb) {
        connection.query("SELECT * FROM ??", [table], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function() {

    },
    updateOne: function() {

    }
}

module.exports = orm;