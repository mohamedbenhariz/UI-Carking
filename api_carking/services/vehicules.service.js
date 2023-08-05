const db = require('../config/db');

module.exports = {
    getAllVehicule,
    getVehiculeById,
    getVehiculeByMatricule,
    createVehicule,
    updateVehicule,
    deleteVehicule,

} 

async function getAllVehicule(){
    const vehicules = await db.vehicule.findAll();
    return vehicules;
}

async function getVehiculeById(id){
    const vehicule = await db.vehicule;
    return vehicule;
}

async function getVehiculeByMatricule(matricule){
    const vehicules = await db.vehicule.findOne({where: {matricule}});
    return vehicules ;
}

async function createVehicule(vehicules){
    const createdVehicule = await db.vehicule.create(vehicules);
    return createdVehicule;
}

async function updateVehicule(id, vehicules){
    const updateVehicule = await db.vehicule.update(vehicules, {where: {id}});
    return updateVehicule;
}

async function deleteVehicule(id){
    const deleteVehicule = await db.vehicule.destroy({where: {id}});
    return deleteVehicule;
}
