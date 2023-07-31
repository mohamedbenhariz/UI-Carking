const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributs = {
        userId: DataTypes.INTEGER,
        roleId: DataTypes.INTEGER,
    };

    const UserRole = sequelize.define('UserRole', attributs);

    return UserRole;
}