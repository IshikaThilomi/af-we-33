const db = require("../models");
const User = db.user;
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");//for public access(home)
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Profile.");//for loggedin users
};

exports.adminBoard = (req, res) => {
  res.status(200).send("AdminProfile.");//for admin users
};

exports.reviewerBoard = (req, res) => {
  res.status(200).send("Reviewer Profile.");//for reviewer users
};

exports.editorBoard = (req, res) => {
  res.status(200).send("Editor Profile.");//for editor users
};

exports.updateUser = (req, res) => {
  User.update({_id: req.userId},
     {
         username: req.body.username,
         email: req.body.email,
         role: req.body.role,
         phone: req.body.phone,
         address: req.body.address,
      },
  )
      .populate("roles", "-__v")
      .exec((err, user) => {
          User.findOne({_id: req.userId})
              .populate("roles", "-__v")
              .exec((err, user) => {
                  console.log("response>>>>>>>>>", user)
                  res.status(200).send(user);
              })
      })
}