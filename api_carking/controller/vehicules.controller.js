
const vehiculesService = require('../services/vehicules.service');


class vehiculesControllers {

    //create vehicules
    async create(req, res, next){
        try {
            const { marque, matricule, chassis, couleur, photo, userId } = req.body;
            const vehiculeFound = await vehiculesService.getVehiculeByMatricule(matricule);
            const user = await db.user.findByPk(userId);
            if (!user) {
                return null
            }
            if(vehiculeFound){
                return res.status(400).json({message: "vehicule already exist"});
            }

            const newVehicule = await vehiculesService.createVehicule({
                marque, 
                matricule,
                chassis,
                couleur,
                photo,
                userId
            });

            return res.status(201).json({
                success: true,
                message: "vehicle created successfully",
                data: newVehicule
            });
        }catch(error){
            next(error);
        }
    }

    //read
    async read(req, res, next){
        try {
            const vehicles = await vehiculesService.getAllVehicule();
            return res.status(200).json({
                success: true,
                message: "vehicles fetched successfully",
                data: vehicles
            });
        }catch(error){
            next(error);
        }
    }

    //update
    async update(req, res, next){   

        //get id from params
        const { id } = req.params;
       try{
        const vehiculeFound = await vehiculesService.getVehiculeById(id);
        if(!vehiculeFound){
            return res.status(400).json({
                success: false,
                message: "vehicule not found"
            })
        }

        //get data from body
        const { marque, matricule, photo } = req.body;

        //update vehicule
        const updatedVehicule = await vehiculesService.updateVehicule(id, {
            marque,
            matricule,
            photo
        })

        return res.status(200).json({
            success: true,
            message: "vehicule updated successfully",
            data: updatedVehicule
        });
       }catch(error){
           next(error);
       }
    }

    //delete
    async delete(req, res, next){
        try {
            const { id } = req.params;
            const vehiculeFound = await vehiculesService.getVehiculeById(id);
            if(!vehiculeFound){
                return res.status(400).json({
                    success: false,
                    message: "vehicule not found"
                })
            }

            await vehiculesService.deleteVehicule(id);
            return res.status(200).json({
                success: true,
                message: "vehicule deleted successfully"
            });
        }catch(error){
            next(error);
        }
    }

    
    //get vehicule by id
    async getVehiculeById(req, res, next){
        try {
            const { id } = req.params;
            const vehiculeFound = await vehiculesService.getVehiculeById(id);
            if(!vehiculeFound){
                return res.status(400).json({
                    success: false,
                    message: "vehicule not found"
                })
            }

            return res.status(200).json({
                success: true,
                message: "vehicule fetched successfully",
                data: vehiculeFound
            });
        }catch(error){
            next(error);
        }
    }
    
    async createdVehiculeByUserConnect(req, res, next){
        try{
            const { marque, matricule, chassis, couleur, photo } = req.body;
            const user = req
            console.log("user", user)
            const createvehicule = await vehiculesService.createVehicule({
                marque,
                matricule,
                chassis,
                couleur,
                photo,
                userId : user
            })
            return res.status(201).json({
                success: true,
                data: createvehicule
            })
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

}

module.exports = new vehiculesControllers();