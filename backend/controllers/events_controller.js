const express = require('express');
const router = express.Router();
let Presenter = require('../models/presenter_model')
let Researcher = require('../models/researcher_model')
let WorkshopConductor = require('../models/workshop_conductor')
const fileupload = require('express-fileupload')
var _ = require("underscore");
module.exports = function () {
  router.post('/register_researcher', function (req, res) {
    let researcher = new Researcher(req.body)
    console.log(req)
    var files = req.files.file
    files.mv('public/files/' + req.body.EventType + "," + req.body.UserId + "," + files.name, function (err) {
      if (!err) {
        // presenter.file_name=files.name
        researcher.save()
          .then(Researcher => {
            console.log("Data Posted")
            res.send("Sucessfull")
          }).catch(err => {
            console.log("Error")
            res.send("Fail")
          });
      } else {
        console.log(err)

      }
    })

  })

  router.post('/register_presenter', function (req, res) {

    try {
      //var pp=req.files.selected_file
      console.log(req.body)
      let presenter = new Presenter(req.body)
      var files = req.files.file


      files.mv('public/files/' + req.body.EventType + "," + files.name + "," + req.body.UserId + ".txt", function (err) {
        if (!err) {
          // presenter.file_name=files.name

          presenter.save()
            .then(Presenter => {
              console.log("Test1")
              console.log("Data Posted")
              res.send("Sucessfull")
            }).catch(err => {
              console.log("Test2")
              console.log("Error")
              res.send("Fail")
            });
        } else {
          console.log(err)
          res.send("Fail")

        }
      })

    } catch {
      res.send("fail")

    }


  })


  router.post('/register_workshopConductor', function (req, res) {
    let workshopconductor = new WorkshopConductor(req.body)
    console.log(workshopconductor)


    var files = req.files.file

    files.mv('public/files/' + req.body.EventType + "," + files.name + "," + req.body.UserId + ".txt", function (err) {
      if (!err) {
        // presenter.file_name=files.name

        workshopconductor.save()
          .then(WorkshopConductor => {
            console.log("Data Posted")
            res.send("Sucessfull")
          }).catch(err => {
            console.log("Error")
            res.send("Fail")
          });
      } else {
        console.log(err)

      }
    })

  })




  router.get('/get_approved_presentations', function (req, res) {
    console.log(req.body.selected_file)
    Presenter.find(function (err, data) {
      if (err) {

      } else {
        var filtered = _.where(data, { Verified: "Accepted" });
        console.log(filtered)
        res.status(200).send(filtered);
      }
    })
  })

  router.get('/get_approved_workshops', function (req, res) {
    WorkshopConductor.find(function (err, data) {
      if (err) {

      } else {
        var filtered = _.where(data, { Verified: "Accepted" });
        console.log(filtered)
        res.status(200).send(filtered);
      }
    })
  })
  router.get('/get_approved_research_pappers', function (req, res) {
    Researcher.find(function (err, data) {
      if (err) {

      } else {
        var filtered = _.where(data, { Verified: "Accepted" });
        console.log(filtered)
        res.status(200).send(filtered);
      }
    })
  })
  router.get('/get_user_events/:id', function (req, res) {
    console.log(req.params.id)
    Researcher.find({ UserId: req.params.id }, function (err, data) {
      if (err) {
      } else {
        WorkshopConductor.find({ UserId: req.params.id }, function (err, data2) {
          if (err) {
          } else {
            Presenter.find({ UserId: req.params.id }, function (err, data3) {
              if (err) {
              } else {
                data = data.concat(data2)
                data = data.concat(data3)
                res.status(200).send(data);
              }
            })
          }
        })
      }
    })
  })



  return router;
}