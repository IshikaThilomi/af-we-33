const express = require('express');
const router = express.Router();
let Conference = require('../models/conference.model')
let Presentations = require('../models/presenter_model')
let WorkShops = require('../models/workshop_conductor')
let Research = require('../models/researcher_model')
var _ = require("underscore");
module.exports = function () {



    router.get('/getStatus', function (req, res) {

        Conference.find(function (err, data) {
            if (err) {
            } else {
                var TotalNumberOfConferenceRequest = Object.keys(data).length;
                var OpenConferences = _.where(data, { Status: "Open" });
                var TotalNumberOFOpenConferences= Object.keys(OpenConferences).length;
                var PastConfercnes = _.where(data, { Status: "Ofline" });
                var TotalNumberofPastConferences= Object.keys(PastConfercnes).length;
                var DeclinedConferences = _.where(data, { Verified: "Declined" });
                var TotalNumberOfDecliendConferences= Object.keys(DeclinedConferences).length;
                var ApprovedConferences = _.where(data, { Verified: "Verified" });
                var TotalnumberOfApprovedConferences= Object.keys(ApprovedConferences).length;
                Presentations.find(function (err, data2) {
                    if (err) {
                    } else {
                        var TotalNumberoFPresentationRequets = Object.keys(data2).length;
                        var AcceptedPresetations = _.where(data2, { Verified: "Accepted" });
                        var TotalNumberOFAcceptedPresentations= Object.keys(AcceptedPresetations).length;
                        var DeclinedPresetations = _.where(data2, { Verified: "Decline" });
                        var TotalNumberOfDeclinedPresntations= Object.keys(DeclinedPresetations).length;
                        var PendngPresentations = _.where(data2, { Verified: "Pending" });
                        var TotalNumberOfPendingPResenations= Object.keys(PendngPresentations).length;
                        WorkShops.find(function (err, data3) {
                            if (err) {
                            } else {
                                var TotalNumberoFWorkShops = Object.keys(data3).length;
                                var AcceptedWorkShops = _.where(data3, { Verified: "Accepted" });
                                var TotalnumberoFAcceptedWorkShops= Object.keys(AcceptedWorkShops).length;
                                var DeclinedWorkShops = _.where(data3, { Verified: "Decline" });
                                var TotalNumberOFDeclinedWorkShops= Object.keys(DeclinedWorkShops).length;
                                var PendingWorkShops = _.where(data3, { Verified: "Pending" });
                                var TotalNumberofPendingWorkSHops= Object.keys(PendingWorkShops).length;
                                Research.find(function (err, data4) {
                                    if (err) {
                                    } else {
                                        var TotalNumberOfReseachs = Object.keys(data2).length;
                                        var AcceptedReseachs = _.where(data4, { Verified: "Accepted" });
                                        var TotalNumberoFacceptedRearches= Object.keys(AcceptedReseachs).length;
                                        var DeclinedReseach = _.where(data4, { Verified: "Decline" });
                                        var TotalNumberofDeclinedResearhces= Object.keys(DeclinedReseach).length;
                                        var PendingResaeach = _.where(data4, { Verified: "Pending" });
                                        var TotalNumberofPendingResearch= Object.keys(PendingResaeach).length;
                                        const Data=[{
                                            TotalNumberOfConferenceRequest:TotalNumberOfConferenceRequest,
                                            TotalNumberOFOpenConferences:TotalNumberOFOpenConferences,
                                            TotalNumberofPastConferences:TotalNumberofPastConferences,
                                            TotalNumberOfDecliendConferences:TotalNumberOfDecliendConferences,
                                            TotalnumberOfApprovedConferences:TotalnumberOfApprovedConferences,
                                            TotalNumberoFPresentationRequets:TotalNumberoFPresentationRequets,
                                            TotalNumberOFAcceptedPresentations:TotalNumberOFAcceptedPresentations,
                                            TotalNumberOfDeclinedPresntations:TotalNumberOfDeclinedPresntations,
                                            TotalNumberOfPendingPResenations:TotalNumberOfPendingPResenations,
                                            TotalNumberoFWorkShops:TotalNumberoFWorkShops,
                                            TotalnumberoFAcceptedWorkShops:TotalnumberoFAcceptedWorkShops,
                                            TotalNumberOFDeclinedWorkShops:TotalNumberOFDeclinedWorkShops,
                                            TotalNumberofPendingWorkSHops:TotalNumberofPendingWorkSHops,
                                            TotalNumberOfReseachs:TotalNumberOfReseachs,
                                            TotalNumberoFacceptedRearches:TotalNumberoFacceptedRearches,
                                            TotalNumberofDeclinedResearhces:TotalNumberofDeclinedResearhces,
                                            TotalNumberofPendingResearch:TotalNumberofPendingResearch
                                        }]
                                        JSON.stringify(Data)
                                       
                                        res.status(200).send(Data);
                                    }
                                })
                            }
                        })
                    }
                })
                
            }
        })
    })



    return router;
}