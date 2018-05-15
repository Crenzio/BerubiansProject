module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/shows", function (req, res) {
        res.render("shows");
    });

    app.get("/treShows", function (req, res) {
        res.render("treShows");
    });

    app.get("/classes", function (req, res) {
        res.render("classes");
    });

    app.get("/events", function (req, res) {
        res.render("events");
    });

    app.get("/contact", function (req, res) {
        res.render("contact");
    });

    app.get("/rent", function (req, res) {
        res.render("rent");
    });

    app.get("/tres", function (req, res) {
        res.render("tres");
    });

    app.get("/support", function (req, res) {
        res.render("support");
    });

    app.get("/social", function (req, res) {
        res.render("social");
    });

    app.get("/terms", function (req, res) {
        res.render("terms");
    });

    app.get("/patreon", function (req, res) {
        res.render("patreon");
    });

    app.get("/meetup", function (req, res) {
        res.render("meetup");
    });

};
