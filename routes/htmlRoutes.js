var path = require("path");

module.exports = function (app) {

    // Route to serve up notes html page
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // Route to serve up home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
        // res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));
        // res.sendFile(path.join(__dirname, "../public/assets/js/script.js"));
    });
};