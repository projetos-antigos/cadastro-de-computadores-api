const User = require("../models/UserModel");

module.exports = {
  async store(data) {
    const user = new User(data);
    await user.save();
    user.password = undefined;
    user.createdAt = undefined;
    user.updatedAt = undefined;
    user.__v = undefined;
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
    return await User.findById(id).select([
      "-password",
      "-createdAt",
      "-updatedAt",
      "-__v",
    ]);
  },

  async find() {
    return await User.find().select([
      "-password",
      "-createdAt",
      "-updatedAt",
      "-__v",
    ]);
  },

  async delete(id) {
    const user = User.findByIdAndDelete(id).select([
      "-password",
      "-createdAt",
      "-updatedAt",
      "-__v",
    ]);

    return user;
  },

  async update(id, fields) {
    const user = await User.findByIdAndUpdate(id, fields).select([
      "-password",
      "-createdAt",
      "-updatedAt",
      "-__v",
    ]);

    return user;
  },
};
