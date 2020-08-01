var fs = require("fs");
var path = require("path");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        fs.readFile(__dirname + "/../db/db.json", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            res.send(JSON.parse(data));
            // console.log(JSON.parse(data));
        });
    });

    app.post("/api/notes", function (req, res) {
        var new_note = req.body;
        fs.readFile(__dirname + "/../db/db.json", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            var notes = JSON.parse(data);
            last_id = notes[notes.length - 1].id;
            new_note.id = last_id + 1;
            notes.push(new_note);
            res.send(new_note);


            fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(notes), function (err) {

                if (err) {
                    return console.log(err);
                }
                console.log("Success!");

            });
        })


    });

    app.delete("api/notes/:id", function (req, res) {
        // get id character
    });
};