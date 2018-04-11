module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    });

    app.get("/shows", function (req, res) {
        res.render("shows");
    });

    app.get("/classes", function (req, res) {
        res.render("classes");
    });

    app.get("/auditions", function (req, res) {
        res.render("auditions");
    });

    app.get("/contact", function (req, res) {
        res.render("contact");
    });

    app.get("/mail", function (req, res) {
        res.render("mail");
    });

    app.get("/social", function (req, res) {
        res.render("social");
    });

};
