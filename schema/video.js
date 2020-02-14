const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const VideoSchema = new Schema({
        title: {
            type: String,
            required: true,
        },
        videoId: {
            type: String,
            required: true,
            unique: true,
        },
        date: {
            type: Date,
            required: true,
        }
    }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Video", VideoSchema);