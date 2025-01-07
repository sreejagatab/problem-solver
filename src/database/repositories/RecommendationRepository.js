// database/repositories/RecommendationRepository.js
const Recommendation = require('../models/Recommendation');

class RecommendationRepository {
  static async create(recommendationData) {
    const recommendation = new Recommendation(recommendationData);
    return await recommendation.save();
  }

  static async findByUserId(userId) {
    return await Recommendation.find({ userId });
  }

  // Add more CRUD methods as needed
}

module.exports = RecommendationRepository;