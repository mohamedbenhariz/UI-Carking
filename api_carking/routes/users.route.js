const userController = require(`../controller/users.controller`);
const isAdmin = require('../middlewares/isAdmin')
const isLogin = require('../middlewares/isLogin')
const express = require(`express`);
const userRouter = express.Router();
const path = `/users`;


userRouter.get(`${path}/`,isLogin, isAdmin, userController.read);
userRouter.get(`${path}/:id`, userController.getUserById);
userRouter.post(`${path}`, userController.create);
userRouter.put(`${path}/update/:id`, isAdmin, userController.update);
userRouter.delete(`${path}/:id`, userController.delete);
userRouter.get(`${path}/login/current`, isLogin, userController.fetchCurentUser);

module.exports = userRouter;