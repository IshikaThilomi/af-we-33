const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Conference = new Schema({
    EditorID:{
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
    Conference_Type:{
        type: String
    },
    Venue:{
        type: String
    },
    Date:{
        type: String
    },
    Conference_Description:{
        type: String
    },
    TimeStamp:{
        type:String
    },
    Status:{
        type:String
    },
    Verified:{
        type:String
    },
    StatusDate:{
        type:String
    },
    StatusMaker:{
        type:String
    }
    
});

module.exports = mongoose.model('Conference', Conference);

