const express = require("express");
const compression = require("compression");
const cors = require("cors");
const logger = require("morgan");
const session = require("express-session");
require("./database");
const routes = require("./routes");
const { secretKey } = require("./config/server");
const passport = require("./lib/passport");

const app = express();

app.use(session({ secret: secretKey, resave: true, saveUninitialized: true }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("combined"));
app.use(compression());
app.use(passport.initialize());
app.use(passport.session());
app.use("/", routes);

module.exports = app;
