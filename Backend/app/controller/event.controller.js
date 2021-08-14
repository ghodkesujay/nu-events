const db = require("../model");
const Event = db.events;

// Create and Save a new Event
exports.create = (req, res) => {
  // Validate request
  if (!req.body.evname || !req.body.cardImageUrl || !req.body.description || !req.body.location || !req.body.date || !req.body.genre || !req.body.price || !req.body.artist) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Event
  const event = new Event({
    evname: req.body.evname,
    description: req.body.description,
    location : req.body.location,
    cardImageUrl : req.body.cardImageUrl,
    date : req.body.date,
    genre : req.body.genre,
    price : req.body.price,
    artist : req.body.artist
  });

  // Save Event in the database
  event
    .save(event)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Event."
      });
    });
};

// Retrieve all Event from the database.
exports.findAll = (req, res) => {
  const evname = req.query.evname;
  var condition = evname ? { evname: { $regex: new RegExp(evname), $options: "i" } } : {};

  Event.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving events."
      });
    });
};

// Find a single Event with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  console.log("In here by Id"+id);

  Event.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Event with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Event with id=" + id });
    });
};

// Update a Event by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Event.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Event with id=${id}. Maybe Event was not found!`
        });
      } else res.send({ message: "Event was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Event with id=" + id
      });
    });
};

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Event.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
        });
      } else {
        res.send({
          message: "Event was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Event with id=" + id
      });
    });
};

// Delete all Event from the database.
exports.deleteAll = (req, res) => {
  Event.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Event were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all events."
      });
    });
};

// Find all published Event
exports.findAllPublished = (req, res) => {
  Event.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving events."
      });
    });
};

