const Router = require("express").Router();
const controller = require("../controllers/UserControllers");
const validation = require("../validations/UserValidations");

Router.post("/", validation.store, controller.store);
Router.get("/", controller.index);
Router.get("/:id", controller.show);
Router.delete("/:id", controller.delete);

module.exports = Router;
