const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  

  _id: mongoose.Types.ObjectId,
  id:String,
  name: String,
  win:Number,
  try:Number
});

module.exports = playerSchema;