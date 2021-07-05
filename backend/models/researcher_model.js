const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Researcher = new Schema({
    UserId:{

    },
    Name: {
        type: String
    },
    Email: {
        type: String
    },
    Phone:{
        type: String
    },
    Status:{
        type: String
    },
    TimeStamp:{
        type: String
    },
    StatusDate:{
        type: String
    },
    StatusMaker:{
        type: String
    },
    Research_title:{
        type: String
    },
    Research_Type:{
        type: String
    },
    Description:{
        type: String
    },
    Verified:{
        type: String
    },
    EventType:{
        type:String
    },
    file_name:{
        type:String
    },
    Conference_ID:{
        type:String
    },
    Conference_Name:{
        type:String
    }
});

module.exports = mongoose.model('Researcher', Researcher);