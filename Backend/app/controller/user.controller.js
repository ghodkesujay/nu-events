require('dotenv').config();
const nodemailer = require('nodemailer');
const db = require("../model");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstName || !req.body.lastName || !req.body.phone || !req.body.numberOfPeople || !req.body.email) {
        res.status(400).send({ message: "All Fields are Required" });
        console.log("All Fields are Required")
        return;
    }

    // Create a User
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        numberOfPeople: req.body.numberOfPeople,
        email: req.body.email,
    });
    //ADITYA's Code for mail.
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: 'adidasani38@gmail.com',
        to: req.body.email,
        subject: 'Order Confirmation',
        text: 'First Name : ' + req.body.firstName + '\n Last Name : ' + req.body.lastName + '\n Phone : ' + req.body.phone + '\n Total Passes : ' + req.body.numberOfPeople
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log('Error : ', err);
        } else {
            console.log('Email Successfully sent');
        }

    });
    //ADITYA's Code ends.

    // Save User in the database
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while sending the User."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User with id=" + id });
        });
};