var fs = require("fs");
var path = require("path");

module.exports = function (app) {

    // produces an array of notes to the front end
    app.get("/api/notes", function (req, res) {
        fs.readFile(__dirname + "/../db/db.json", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            res.send(JSON.parse(data));
        });
    });

    // posts a newly written note to the file
    app.post("/api/notes", function (req, res) {
        var new_note = req.body;
        fs.readFile(__dirname + "/../db/db.json", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            var notes = JSON.parse(data);
            var last_id;
            if (notes.length === 0) {
                last_id = 0;
            } else {
                last_id = notes[notes.length - 1].id
            }
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

    // deletes a specific notes from the file
    app.delete("/api/notes/:id", function (req, res) {
        var id = req.params.id;
        fs.readFile(__dirname + "/../db/db.json", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            var notes = JSON.parse(data);

            console.log(notes);
            console.log(id);

            new_notes = notes.filter((note) => note.id != id);

            console.log(new_notes);
            res.send(new_notes);
            fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(new_notes), function (err) {

                if (err) {
                    return console.log(err);
                }
                console.log("Success!");

            });
        })
    });
};