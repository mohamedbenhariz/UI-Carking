const vehiculesController = require("../controller/vehicules.controller");
const express = require(`express`);
const vehiculeRouter = express.Router();
const path = `/vehicules`;


vehiculeRouter.get(`${path}/read`, vehiculesController.read);
vehiculeRouter.get(`${path}/:id`, vehiculesController.getVehiculeById);
vehiculeRouter.post(`${path}/create`, vehiculesController.create);
vehiculeRouter.post(`${path}/createByUser`, vehiculesController.createdVehiculeByUserConnect);
vehiculeRouter.put(`${path}/update/:id`, vehiculesController.update);
vehiculeRouter.delete(`${path}/delete/:id`, vehiculesController.delete);

module.exports = vehiculeRouter;