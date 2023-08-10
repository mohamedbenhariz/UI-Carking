const vehiculesController = require("../controller/vehicules.controller");
const express = require(`express`);
const isLogin = require('../middlewares/isLogin');
const vehiculeRouter = express.Router();
const path = `/vehicules`;


vehiculeRouter.get(`${path}/`, isLogin, vehiculesController.read);
vehiculeRouter.get(`${path}/:id`, isLogin, vehiculesController.getVehiculeById);
vehiculeRouter.post(`${path}/create`, isLogin, vehiculesController.create);
vehiculeRouter.get(`${path}/user/connect`, isLogin, vehiculesController.getAllVehiculeUserConnect);
vehiculeRouter.put(`${path}/update/:id`,isLogin, vehiculesController.update);
vehiculeRouter.delete(`${path}/delete/:id`, isLogin, vehiculesController.delete);

module.exports = vehiculeRouter;