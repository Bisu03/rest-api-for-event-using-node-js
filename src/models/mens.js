const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const mensSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  dob: {
    type: Date,
    require: true,
    trim: true,
  },
  country: {
    type: String,
    require: true,
    trim: true,
  },
  rank: {
    type: Number,
    require: true,
    trim: true,
  },
  score: {
    type: Number,
    require: true,
    trim: true,
  },
  event: {
    type: String,
    trim: true,
    default: "100m",
  },
});

const MenRanking = new mongoose.model("MenRanking", mensSchema);

module.exports = MenRanking;
