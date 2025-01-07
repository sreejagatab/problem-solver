
// database/repositories/UserRepository.js
const User = require('../models/User');

class UserRepository {
  static async create(userData) {
    const user = new User(userData);
    return await user.save();
  }

  static async findByUsername(username) {
    return await User.findOne({ username });
  }

  // Add more CRUD methods as needed
}

module.exports = UserRepository;