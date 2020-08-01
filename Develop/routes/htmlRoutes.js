var path = require("path");

module.exports = function (app) {


    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
        // res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
        // res.sendFile(path.join(__dirname, "../public/assets/js/script.js"));
    });
};