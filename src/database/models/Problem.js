// database/models/Problem.js
const mongoose = require('mongoose');
const problemSchema = require('../schemas/problem');

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;