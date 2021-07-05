const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileupload=require('express-fileupload')

const EventController = require('./controllers/events_controller');
const ConferenceController = require('./controllers/conference.controller');
const AdminConferenceController = require('./controllers/admin.conference.controller');
const AdminDashBoard = require('./controllers/admindashboard');
const ReviewerController = require('./controllers/reviewer_controller');
const db = require("./app/models");
const Role = db.role;
dotenv.config();
const app = express();
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use(cors(corsOptions));
app.use(fileupload())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

mongoose.connection.once('open', () => {
    createRoles();
    console.log('Database Connection Sucessfull');
});

app.get("/",(req,res)=>{
    res.status(200).send("Done");

})

function createRoles() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "admin"
        }).save(err => {  //create a new user
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
        new Role({
            name: "user"
          }).save(err => {  //create a new user
            if (err) {
              console.log("error", err);
            }
    
            console.log("added 'user' to roles collection");
          });
  
        new Role({
          name: "editor"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'editor' to roles collection");
        });
  
        new Role({
          name: "reviewer"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'reviewer' to roles collection");
        });
      }
    });
  }


app.use('/events', EventController());
app.use('/conference', ConferenceController());
app.use('/adminconference', AdminConferenceController());
app.use('/admindash', AdminDashBoard());
app.use('/reviewer', ReviewerController());
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});