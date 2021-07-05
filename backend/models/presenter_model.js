const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Presenter = new Schema({
    UserId:{
        type: String
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
    Presentation_Type:{
        type:String
    },
    Title:{
        type:String
    },
    Platform:{
        type:String
    },
    Link:{
        type:String
    },
    Date_To_Be_held:{
        type:String
    },
    Verified:{
        type:String
    },
    Brief_descriptipn:{
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
    },
    EventType:{
        type:String
    }
   
});

module.exports = mongoose.model('Presenter', Presenter);