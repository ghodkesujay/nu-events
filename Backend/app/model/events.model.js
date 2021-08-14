module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        evname: String,
        cardImageUrl: String,
        location: String,
        description: String,
        date: String,
        genre: String,
        price: String,
        artist : String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Event = mongoose.model("event", schema);
    return Event;
  };

