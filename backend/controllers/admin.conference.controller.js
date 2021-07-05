const express = require('express');
const router = express.Router();
let Conference = require('../models/conference.model')
let ConferenceLatest = require('../models/conference.modelLatest')
var _ = require("underscore");
module.exports = function () {



  router.get('/get_all_approved_Conferences', function (req, res) {

    Conference.find(function (err, data) {
      if (err) {
      } else {
        var filtered = _.where(data, { Verified: "Verified" });
        var filtered2 = _.where(filtered, { Status: "Open" });
        res.status(200).send(filtered2);
      }
    })
  })

  router.get('/get_all_pending_conferences', function (req, res) {
    console.log("Hi")
    Conference.find(function (err, data) {
      if (err) {
      } else {
        var filtered = _.where(data, { Verified: "Pending" });
        var filtered2 = _.where(filtered, { Status: "Pending" });
        res.status(200).send(filtered2);
      }
    })
  })

  router.get('/get_all_declined_conferences', function (req, res) {
    console.log("Hi")
    Conference.find(function (err, data) {
      if (err) {
      } else {
        var filtered = _.where(data, { Verified: "Declined" });
        res.status(200).send(filtered);
      }
    })
  })

  router.get('/get_all_ofline_conferences', function (req, res) {
    console.log("Hi")
    Conference.find(function (err, data) {
      if (err) {
      } else {
        var filtered = _.where(data, { Status: "Ofline" });
        res.status(200).send(filtered);
      }
    })
  })

  router.get('/get_conferences_byid/:id', function (req, res) {
    console.log(req.params.id)
    Conference.find({ _id: req.params.id }, function (err, data) {
      if (err) {
      } else {
        res.status(200).send(data);
      }
    })
  })

  router.put('/manageconference', function (req, res) {
    try {
     
      let conf = new Conference(req.body);
      Conference.updateOne({ _id: req.body.RequestID }, { Name: req.body.Name, Email: req.body.Email, Phone: req.body.Phone, Conference_Type: req.body.Conference_Type, Venue: req.body.Venue, Date: req.body.Date, Conference_Description: req.body.Conference_Description, TimeStamp: req.body.TimeStamp, Status: req.body.Status, Verified: req.body.Verified, StatusDate: req.body.StatusDate, StatusMaker: req.body.StatusMaker }, function (err, docs) {
        if (!err) {
          console.log("Done")
        } else {
          console.log("Error")
        }
      })
    } catch {
      res.send('fail')

    }

    console.log(req.body)
  })

  router.put('/ApproveConference', function (req, res) {
    console.log("data")
    console.log(req.body)
    if(req.body.Verified == 'Verified'){
      ConferenceLatest.find( function (err, data) {
        if (err) {
        } else {
          Conference.updateOne({ _id: req.body.RequestID }, { Name: req.body.Name, Email: req.body.Email, Phone: req.body.Phone, Conference_Type: req.body.Conference_Type, Venue: req.body.Venue, Date: req.body.Date, Conference_Description: req.body.Conference_Description, TimeStamp: req.body.TimeStamp, Status: req.body.Status, Verified: req.body.Verified, StatusDate: req.body.StatusDate, StatusMaker: req.body.StatusMaker }, function (err, docs) {
            if (!err) {
              ConferenceLatest.updateOne({ _id: "60e2309f2b5e2515a4140075" }, { Name: req.body.Name, Email: req.body.Email, Phone: req.body.Phone, Conference_Type: req.body.Conference_Type, Venue: req.body.Venue, Date: req.body.Date, Conference_Description: req.body.Conference_Description, TimeStamp: req.body.TimeStamp, Status: req.body.Status, Verified: req.body.Verified, StatusDate: req.body.StatusDate, StatusMaker: req.body.StatusMaker }, function (err, docs) {
                if (!err) {
                  console.log("Donesss")
                } else {
                  console.log("Error")
                }
              })
            } else {
              console.log("Error")
            }
          })

          console.log(data)
        }
      })
      

    }else{
      Conference.updateOne({ _id: req.body.RequestID }, { Name: req.body.Name, Email: req.body.Email, Phone: req.body.Phone, Conference_Type: req.body.Conference_Type, Venue: req.body.Venue, Date: req.body.Date, Conference_Description: req.body.Conference_Description, TimeStamp: req.body.TimeStamp, Status: req.body.Status, Verified: req.body.Verified, StatusDate: req.body.StatusDate, StatusMaker: req.body.StatusMaker }, function (err, docs) {
        if (!err) {
          res.send("pass")
        } else {
          console.log("Error")
        }
      })

    }
    

    console.log(req.body)
  })



  return router;
}