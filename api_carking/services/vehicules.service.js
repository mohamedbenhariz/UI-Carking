const db = require('../config/db');

module.exports = {
    getAllVehicules,
    getVehiculeById,
    createVehicule
}


//all vehicule
async function getAllVehicules(){
    const vehicules = await db.vehicule.findAll();
    return vehicules;
}

//vehicule by id
async function getVehiculeById(id){
    const vehicule = await db.vehicule.findByPk(id);
    return vehicule;
}

//vehicule by user(id)

//create vehicule by user(id)
async function createVehicule(userId, vehicule){
    try {
        const user = await db.user.findByPk(userId);
        if (!user) {
          throw new Error('Utilisateur introuvable');
        }
        const vehicle = await db.vehicule.create({ vehicule, user_id: user.id });
        return vehicle;
      } catch (error) {
        return error;
      }    
}