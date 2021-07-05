const express = require('express');
const router = express.Router();
let Conference = require('../models/conference.model')
let ConferenceLatest = require('../models/conference.modelLatest')

var _ = require("underscore");
module.exports = function () {
  router.post('/submit_conference_request', function (req, res) {
    let conference = new Conference(req.body)
    console.log(conference)
    conference.save()
      .then(Conference => {
        console.log("Data Posted")
        res.send("Sucessfull")
      }).catch(err => {
        console.log("Error")
        res.send("Fail")
      });
  })

  router.get('/get_editor_conferences/:id', function (req, res) {
    console.log(req.params.id)
    Conference.find({ EditorID: req.params.id }, function (err, data) {
      if (err) {
      } else {
        res.status(200).send(data);
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
  router.get('/getmainConferenceDetails', function (req, res) {
    console.log(req.params.id)
    ConferenceLatest.find( function (err, data) {
      if (err) {
      } else {
        res.status(200).send(data);
      }
    })
  })



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


  router.put('/editconference', function (req, res) {
    let conf = new Conference(req.body);
    Conference.updateOne({_id:req.body.RequestID},{Name:req.body.Name,Email:req.body.Email,Phone:req.body.Phone,Conference_Type:req.body.Conference_Type,Venue:req.body.Venue,Date:req.body.Date,Conference_Description:req.body.Conference_Description,TimeStamp:req.body.TimeStamp,Status:req.body.Status,Verified:req.body.Verified,StatusDate:req.body.StatusDate,StatusMaker:req.body.StatusMaker},function(err,docs){
        if(!err){
            console.log("Done")
        }else{
            console.loh("Error")
        }
    })

    console.log(req.body)
  })
  

  return router;
}