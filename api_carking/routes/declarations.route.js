const declarationsController = require("../controller/declarations.controller");
const express = require(`express`);
const declarationRouter = express.Router();
const path = `/declarations`;


declarationRouter.get(`${path}/read`, declarationsController.read);
declarationRouter.get(`${path}/:id`, declarationsController.getDeclarationById);
declarationRouter.post(`${path}/create`, declarationsController.create);
declarationRouter.post(`${path}/createByUser`, declarationsController.createdDeclarationByUserConnect);
declarationRouter.put(`${path}/update/:id`, declarationsController.update);
declarationRouter.delete(`${path}/delete/:id`, declarationsController.delete);

module.exports = declarationRouter;