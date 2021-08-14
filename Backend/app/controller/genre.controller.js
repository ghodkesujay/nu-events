const db = require("../model");
const Event = db.events;

//find event by genre
exports.findAll= (req, res) => {
    const genre = req.params.genre;

    var condition = genre ? { genre: { $regex: new RegExp(genre), $options: "i" } } : {};
  
    console.log("In here by Genre123"+condition);
  
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