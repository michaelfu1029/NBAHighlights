// import mongoose from 'mongoose';


// const dataSchema = new mongoose.Schema({
//   id: {
//     type: String,
//     required: true,
//   },
//   message: {
//     String,
//     required: true,
//   },
// },
// { 
//     timestamps: true
// });

// const Data = mongoose.model('Data', dataSchema);

// export default Data;

// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    message: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);