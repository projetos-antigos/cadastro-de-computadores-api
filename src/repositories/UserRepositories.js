const User = require("../models/UserModel");

module.exports = {
  async store(data) {
    const user = new User(data);
    await user.save();
    user.password = null;
    return user;
  },
  verifyPassword(login, password) {
    return new Promise((resolve, reject) => {
      User.findOne({ login: login })
        .then((user) => {
          user.comparePassword(password, function (error, isMatch) {
            if (error) reject(error);
            else if (isMatch) {
              resolve({ id: user._id });
            } else {
              reject({ error: "InvaledPassword" });
            }
          });
        })
        .catch(() => {
          reject({ error: "UserNotFound" });
        });
    });
  },
  async findById(id) {
    return await User.findById(id);
  },
};
