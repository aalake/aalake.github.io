const Contact = require("../models/contact.model.ts");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

    const contact = new Contact({
        email: req.body.email,
        fullname: req.body.fullname,
        message: req.body.message
      });

// Save Contact in the database
Contact.create(contact, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Contact."
      });
    else res.send(data);
  });


};