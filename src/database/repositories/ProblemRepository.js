// database/repositories/ProblemRepository.js
const Problem = require('../models/Problem');

class ProblemRepository {
  static async create(problemData) {
    const problem = new Problem(problemData);
    return await problem.save();
  }

  static async findAll() {
    return await Problem.find();
  }

  // Add more CRUD methods as needed
}

module.exports = ProblemRepository;