const authController = require(`../controller/users.controller`);
const express = require(`express`);
const userRouter = express.Router();
const path = `/users`;

userRouter.get(`${path}`, authController.read);
userRouter.get(`${path}/:id`, authController.getUserById);
userRouter.post(`${path}`, authController.create);
userRouter.put(`${path}/:id`, authController.update);
userRouter.delete(`${path}/:id`, authController.delete);

module.exports = userRouter;