// database/index.js
const mongoose = require('mongoose');
const { User, Problem, Solution, Recommendation } = require('./models');
const { UserRepository, ProblemRepository, SolutionRepository, RecommendationRepository } = require('./repositories');

const connect = async () => {
  await mongoose.connect('mongodb://localhost:27017/problem-solver', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connect,
  User,
  Problem,
  Solution,
  Recommendation,
  UserRepository,
  ProblemRepository,
  SolutionRepository,
  RecommendationRepository,
};
