const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let WorkShopConductor = new Schema({
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
    Date:{
        type: String
    },
    Venue:{
        type: String
    },
    Description:{
        type: String
    },
    Title:{
        type: String
    },
    Type:{
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

module.exports = mongoose.model('WorkShopConductor', WorkShopConductor);


