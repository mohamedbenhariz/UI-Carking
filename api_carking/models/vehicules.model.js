const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributs = {
        marque: { type: DataTypes.STRING },
        matricule : { type: DataTypes.STRING },
        chassis : DataTypes.STRING,
        couleur : { type: DataTypes.STRING },
        photo : DataTypes.STRING,
    };

    const vehicules = sequelize.define('Vehicule', attributs);
    return vehicules
}