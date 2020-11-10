const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { secretKey } = require("../config/server");
const UserRepository = require("../repositories/UserRepositories");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
  secretOrKey: secretKey,
};

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserRepository.findById(id)
    .then((user) => {
      if (!user) return done(null, false);
      return done(null, { id: user.id });
    })
    .catch((error) => {
      return done(error, null);
    });
});

const verify = (jwtPayload, done) => {
  UserRepository.findById(jwtPayload.id)
    .then((user) => {
      if (!user) return done(null, false);
      return done(null, { id: user.id });
    })
    .catch((error) => {
      return done(error, null);
    });
};

passport.use(new Strategy(options, verify));

module.exports = passport;
