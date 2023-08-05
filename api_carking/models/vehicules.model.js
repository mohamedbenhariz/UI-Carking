const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) { 
    const attributs = {
        marque: { type: DataTypes.STRING },
        matricule : { type: DataTypes.STRING, require },
        chassis : {type: DataTypes.STRING, unique : "chassis"},
        couleur : { type: DataTypes.STRING },
        photo : DataTypes.STRING,
        userId: { type: DataTypes.STRING, require }
    };

    const vehicules = sequelize.define('Vehicule', attributs);
    return vehicules

}