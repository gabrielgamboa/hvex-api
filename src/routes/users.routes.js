const { Router } = require("express");

const UserController = require("../controllers/UserController");
const validateIdMiddleware = require("../middlewares/validateId");

const usersRoutes = Router();
const userController = new UserController();

usersRoutes.post("/", userController.create);
usersRoutes.get("/:id", validateIdMiddleware, userController.find);
usersRoutes.put("/:id", validateIdMiddleware, userController.update);
usersRoutes.delete("/:id", validateIdMiddleware, userController.delete);

module.exports = usersRoutes;