// database/models/Recommendation.js
const mongoose = require('mongoose');
const recommendationSchema = require('../schemas/recommendation');

const Recommendation = mongoose.model('Recommendation', recommendationSchema);

module.exports = Recommendation;