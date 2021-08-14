const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const db = require("./app/model");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to NUevents application.." });
});
require("./app/routes/user.routes")(app);
require("./app/routes/event.routes")(app);
require("./app/routes/genre.route")(app);


//static user list
const users = [{
  userName: 'shiva123',
  email: 'shiva@northeastern.admin',
  password: 'password@123',
  gender: 'male',
  userType: 12
}]

//login
app.post("/api/login", (req, res) => {
  let user;
  users.map(u => {
    console.log(u.email == req.body.email)
    if (u.email == req.body.email && u.password == req.body.password) user = u
  })

  if (user) res.json({
    status: true,
    user,
    msg: "Login success"
  })
  else res.json({
    status: false,
    msg: "Invalid email or password"
  })
})

//signup
app.post("/api/signup", (req, res) => {
  users.push({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    userType: 1
  })

  res.json({
    status: true,
    msg: "Sucessfully signup"
  })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
