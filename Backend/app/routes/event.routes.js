module.exports = app => {
    const events = require("../controller/event.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Event
    router.post("/", events.create);
  
    // Retrieve all Event
    router.get("/", events.findAll);
  
    // Retrieve all published Events
    router.get("/published", events.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", events.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", events.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", events.delete);
  
    // Create a new Tutorial
    router.delete("/", events.deleteAll);
  
    app.use("/api/events", router);
  };
  