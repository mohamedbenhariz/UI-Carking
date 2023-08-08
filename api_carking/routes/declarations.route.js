const declarationsController = require("../controller/declarations.controller");
const express = require(`express`);
const isLogin = require("../middlewares/isLogin");
const isAgent = require("../middlewares/isAgent")
const declarationRouter = express.Router();
const path = `/declarations`;


declarationRouter.get(`${path}/`, declarationsController.read);
declarationRouter.get(`${path}/:id`, declarationsController.getDeclarationById);
declarationRouter.post(`${path}/create`, isLogin, declarationsController.create);
declarationRouter.post(`${path}/create/agent`, isLogin, isAgent, declarationsController.createDeclarationByAgent);
declarationRouter.post(`${path}/createByUser`, declarationsController.createdDeclarationByUserConnect);
declarationRouter.put(`${path}/update/:id`, declarationsController.update);
declarationRouter.delete(`${path}/delete/:id`, declarationsController.delete);

module.exports = declarationRouter;