const Routes = require("express").Router();
const UserRoutes = require("./UserRoutes");
const AuthRoutes = require("./AuthRoutes");
const ComputerRoutes = require("./ComputerRoutes");

Routes.use("/users", /* passport.authenticate("jwt"), */ UserRoutes);
Routes.use("/computers", /* passport.authenticate("jwt"), */ ComputerRoutes);
Routes.use("/login", AuthRoutes);

module.exports = Routes;
