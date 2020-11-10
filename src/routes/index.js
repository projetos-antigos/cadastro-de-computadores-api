const Routes = require("express").Router();
const UserRoutes = require("./UserRoutes");
const AuthRoutes = require("./AuthRoutes");
const passport = require("../lib/passport");

Routes.use("/users", passport.authenticate("jwt"), UserRoutes);
Routes.use("/login", AuthRoutes);

module.exports = Routes;
