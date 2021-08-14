module.exports = app => {
    const genres = require("../controller/genre.controller.js");

    var router = require("express").Router();

        // Retrieve a single Tutorial with id
        router.get("/:genre", genres.findAll);

    app.use("/api/genre", router);
};