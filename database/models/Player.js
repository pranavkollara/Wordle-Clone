const mongoose = require('mongoose');
const playerSchema = require('../schema/Player');

const playerModel = mongoose.model('playerr',playerSchema);
module.exports = playerModel;