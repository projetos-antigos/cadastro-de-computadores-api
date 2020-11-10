const UserRepository = require("../repositories/UserRepositories");

module.exports = {
  async store(req, res) {
    try {
      const user = await UserRepository.store(req.body);
      return res.status(200).json({ status: "success", data: user });
    } catch (error) {
      return res.status(500).json({ status: "fail", data: error.message });
    }
  },
  async index(req, res) {
    try {
      const users = {};
      return res.status(200).json({ status: "success", data: users });
    } catch (error) {
      return res.status(500).json({ status: "fail", data: error.message });
    }
  },
};
