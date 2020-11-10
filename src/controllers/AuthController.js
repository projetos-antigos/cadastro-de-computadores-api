const UserRepository = require("../repositories/UserRepositories");
const { secretKey } = require("../config/server");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");

module.exports = {
  async login(req, res, next) {
    try {
      const { login, password } = req.body;
      UserRepository.verifyPassword(login, password)
        .then((id) => {
          const token = jwt.sign(id, secretKey, {
            expiresIn: 6000,
          });
          return res.status(200).json({ token });
        })
        .catch((error) => {
          res.status(401).json(error);
        });
    } catch (error) {
      return res.status(500).json({ status: "fail", data: error.message });
    }
  },
};
