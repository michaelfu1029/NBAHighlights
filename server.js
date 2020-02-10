const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var cors = require('cors');
const path = require('path')

// const { mongoLink } = require('./credentials');
const Video = require('./routes/Video');
const User = require('./routes/User')

const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
// const dbRoute = mongoLink;
app.use(express.static(path.join(__dirname, "client", "build")))

// connects our back end code with the database
// mongoose.connect(process.env.MONGODB_URI || dbRoute, { useNewUrlParser: true })
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// initialize
const user = new User(app);
const video = new Video(app);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
