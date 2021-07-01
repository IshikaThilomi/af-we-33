const config = require("../config/auth.config");
const db = require("../models");
const mongoose = require('mongoose');
const User = db.user;
const Role = db.role;
// var mongodb = require('mongodb');
var jwt = require("jsonwebtoken");//generate a token using jsonwebtoken
var bcrypt = require("bcryptjs");
//compare username with password in database using bcrypt
exports.signup = (req, res) => {
  const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      phone: req.body.phone,
      address: req.body.address
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.role) {
      Role.find(
        {
          name: { $in: req.body.role }
        },
        (err, role) => {
          if (err) {
            res.status(500).send({ message: 'Error 1' });
            return;
          }
          console.log(user)
          console.log(req.body.role)
          user.role = req.body.role;
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            console.log('user2', user)

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
console.log('2')
        user.role = role._id;
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

exports.getUser = (req, res) => {
    console.log("req>>>>>>>>>>>", req.query.userId)
    User.findOne({_id: req.query.userId})
        .populate("roles", "-__v")
        .exec((err, user) => {
            res.status(200).send(user);
        })
}

exports.deleteUser = (req, res) => {
    User.deleteOne({_id: req.query.userId})
        .populate("roles", "-__v")
        .exec((err, user) => {
            res.status(200).send(user);
        })
}

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      

      });
      
      res.status(200).send({
          id: user._id,
          username: user.username,
          email: user.email,
          role: (user.role).toUpperCase(),
          accessToken: token,
          phone: user.phone,
          address: user.address
      });
    });



};
