var fs = require("fs");
var path = require("path");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        // console.log(__dirname);

        var data1;

        fs.readFile(__dirname + "/../db/db.json", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            res.send(JSON.parse(data));
            console.log(JSON.parse(data));
        });


    });

    app.post("/api/notes", function (req, res) {
        console.log(__dirname);
        // get file
        // update Object
        // save object
        console.log("Api post note");

    });

    app.delete("api/notes/:id", function (req, res) {
        console.log(__dirname);
        // get Id 
        // get Object
        // change Object
        // save Object
        console.log("Api delete note");
    });
};