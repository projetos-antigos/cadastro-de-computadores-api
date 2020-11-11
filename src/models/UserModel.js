const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      uppercase: true,
    },
    login: {
      type: String,
      required: true,
      validate: new RegExp("^[a-z]+([_-]?[a-z])*$"),
      unique: [true, ""],
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    shutdownDate: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  var user = this;

  // Apenas se for modificado o password
  if (!user.isModified("password")) return next();

  // gerar salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // criptografar password
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // sobrescreve password
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
