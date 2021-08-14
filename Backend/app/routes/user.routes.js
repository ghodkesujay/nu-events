module.exports = app => {
    const users = require("../controller/user.controller.js");

    var router = require("express").Router();

    // Create a new User
    router.post("/", users.create);

    // Retrieve a single User with id
    router.get("/:id", users.findOne);

    app.use("/api/users", router);
};