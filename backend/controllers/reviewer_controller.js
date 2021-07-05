const express = require('express');
const router = express.Router();
let ReseachPapper = require('../models/researcher_model')
let Workshop = require('../models/workshop_conductor')
let Presentations = require('../models/presenter_model')


var _ = require("underscore");
module.exports = function () {
  router.get('/get_all_pending_reseach_pappers', function (req, res) {

    ReseachPapper.find(function (err, data) {
      if (err) {
      } else {
        var filtered = _.where(data, { Verified: "Pending" });
        res.status(200).send(filtered);
      }
    })
  })
  router.get('/get_all_accepted_research_pappers', function (req, res) {

    ReseachPapper.find(function (err, data) {
      if (err) {
      } else {
        var filtered = _.where(data, { Verified: "Accepted" });

        res.status(200).send(filtered);
      }
    })
  })

  router.get('/get_all_declined_research_pappers', function (req, res) {

    ReseachPapper.find(function (err, data) {
      if (err) {
      } else {
        var filtered = _.where(data, { Verified: "Decline" });

        res.status(200).send(filtered);
      }
    })
  })
  router.get('/get_all_pending_presentations', function (req, res) {

    Presentations.find(function (err, data) {
      if (err) {
      } else {
        var filtered = _.where(data, { Verified: "Pending" });

        res.status(200).send(filtered);
      }
    })
  })

  router.get('/get_all_accepted_presentations', function (req, res) {

    Presentations.find(function (err, data) {
      if (err) {
      } else {
        var filtered = _.where(data, { Verified: "Accepted" });

        res.status(200).send(filtered);
      }
    })
  })

  router.get('/get_all_declined_presentaions', function (req, res) {

    Presentations.find(function (err, data) {
      if (err) {
      } else {
        var filtered = _.where(data, { Verified: "Decline" });

        res.status(200).send(filtered);
      }
    })
  })
  router.get('/get_all_pending_workshops', function (req, res) {

    Workshop.find(function (err, data) {
      if (err) {
      } else {
        var filtered = _.where(data, { Verified: "Pending" });

        res.status(200).send(filtered);
      }
    })
  })

  router.get('/get_all_accepted_workshops', function (req, res) {

    Workshop.find(function (err, data) {
      if (err) {
      } else {
        var filtered = _.where(data, { Verified: "Accepted" });

        res.status(200).send(filtered);
      }
    })
  })


  router.get('/get_all_declined_workshops', function (req, res) {

    Workshop.find(function (err, data) {
      if (err) {
      } else {
        var filtered = _.where(data, { Verified: "Decline" });

        res.status(200).send(filtered);
      }
    })
  })


  router.get('/get_workshop_by_id/:id', function (req, res) {
    console.log(req.params.id)
    Workshop.find({ _id: req.params.id }, function (err, data) {
      if (err) {
      } else {
        res.status(200).send(data);
      }
    })
  })

  router.get('/get_presentation_by_id/:id', function (req, res) {
    console.log(req.params.id)
    Presentations.find({ _id: req.params.id }, function (err, data) {
      if (err) {
      } else {
        res.status(200).send(data);
      }
    })
  })

  router.get('/get_research_papper_by_id/:id', function (req, res) {
    console.log(req.params.id)
    ReseachPapper.find({ _id: req.params.id }, function (err, data) {
      if (err) {
      } else {
        res.status(200).send(data);
      }
    })
  })

  router.put('/update_presentation_by_Id', function (req, res) {
    Presentations.updateOne({ _id: req.body.RequestID }, { UserId: req.body.UserId, Name: req.body.Name, Email: req.body.Email, Phone: req.body.Phone, Status: req.body.Status, TimeStamp: req.body.TimeStamp, StatusDate: req.body.StatusDate, StatusMaker: req.body.StatusMaker, Presentation_Type: req.body.Presentation_Type, Title: req.body.Title, Platform: req.body.Platform, Link: req.body.Link, Date_To_Be_held: req.body.Date_To_Be_held, Verified: req.body.Verified, Brief_descriptipn: req.body.Brief_descriptipn, Conference_ID: req.body.Conference_ID, Conference_Name: req.body.Conference_Name, EventType: req.body.EventType, file_name: req.body.file_name }, function (err, docs) {
      if (!err) {
        console.log("Done")
      } else {
        console.loh("Error")
      }
    })

  })

  router.put('/update_researsh_by_id', function (req, res) {

    console.log("hi")
    try{

     
    ReseachPapper.updateOne({ _id: req.body.RequestId }, { UserId: req.body.UserId, Name: req.body.Name, Email: req.body.Email, Phone: req.body.Phone, Status: req.body.Status, TimeStamp: req.body.TimeStamp, StatusDate: req.body.StatusDate, StatusMaker: req.body.StatusMaker, Research_title: req.body.Research_title, Research_Type: req.body.Research_Type, Description: req.body.Description, Verified: req.body.Verified, EventType: req.body.EventType, Conference_ID: req.body.Conference_ID, Conference_Name: req.body.Conference_Name, file_name: req.body.file_name }, function (err, docs) {
      if (!err) {
        console.log("Done")
      } else {
        console.log("Error")
      }
    })
    }catch{
      res.send("fail")

    }
    

  })

  router.put('/update_workshops_by_id', function (req, res) {
    try{
     
      Workshop.updateOne({ _id: req.body.RequestId }, { UserId: req.body.UserId, Name: req.body.Name, Email: req.body.Email, Phone: req.body.Phone, Status: req.body.Status, TimeStamp: req.body.TimeStamp, StatusDate: req.body.StatusDate, StatusMaker: req.body.StatusMaker, Date: req.body.Date, Venue: req.body.Venue, Description: req.body.Description, Verified: req.body.Verified, Type: req.body.Type, Title: req.body.Title, EventType: req.body.EventType, Conference_Name: req.body.Conference_Name, file_name: req.body.file_name }, function (err, docs) {
        if (!err) {
          console.log("Done")
        } else {
          console.log("Error")
        }
      })
    }catch{
      res.send("fail")    
    }
    console.log(req.body)
  
  })
  return router;

}