// database/models/Solution.js
const mongoose = require('mongoose');
const solutionSchema = require('../schemas/solution');

const Solution = mongoose.model('Solution', solutionSchema);

module.exports = Solution;
