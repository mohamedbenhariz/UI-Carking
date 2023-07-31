const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributs = {
      dateEntre : { type: DataTypes.DATE },
      typeDeclaration: { type: DataTypes.STRING },
    };

    const Declaration = sequelize.define('Declaration', attributs);
    return Declaration;
}
