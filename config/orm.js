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
    insertOne: function(table, tableCol, value, cb) {
        connection.query("INSERT INTO ?? (??) VALUES(?)", [table, tableCol, value], function(err, result) {
            if (err) {
                throw err;
            }
            console.log("ORM IS WORKING");
            cb(result);
        });
    }
}

module.exports = orm;