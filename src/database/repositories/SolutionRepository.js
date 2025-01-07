// database/repositories/SolutionRepository.js
const Solution = require('../models/Solution');

class SolutionRepository {
  static async create(solutionData) {
    const solution = new Solution(solutionData);
    return await solution.save();
  }

  static async findByProblemId(problemId) {
    return await Solution.find({ problemId });
  }

  // Add more CRUD methods as needed
}

module.exports = SolutionRepository;