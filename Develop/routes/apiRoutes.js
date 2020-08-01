
module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        // parse json object
    });

    app.post("/api/notes", function (req, res) {
        // parse Object
        // append to file
    });

    app.delete("api/notes/:id", function (req, res) {
        // get id from body
        // delete note from app
    });
};