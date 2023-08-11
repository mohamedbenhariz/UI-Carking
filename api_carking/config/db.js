const config = require('./config');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize()


async function initialize() {
    // create db if it doesn't already exist
    const { host, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.user = require('../models/user.model')(sequelize);
    db.role = require('../models/role.model')(sequelize);
    db.declaration = require('../models/declaration.model')(sequelize);
    db.vehicule = require('../models/vehicules.model')(sequelize);

    // Relations entre les modèles
    db.vehicule.belongsTo(db.user, { as: 'user', foreignKey: 'userId' });
    db.user.hasMany(db.vehicule, { as: 'vehicules', foreignKey: 'userId' });
    db.declaration.belongsTo(db.user, { as: 'user', foreignKey: 'userId' });
    db.user.hasMany(db.declaration, { as: 'declarations', foreignKey: 'userId' });
    db.declaration.belongsTo(db.vehicule, { as: 'vehicule', foreignKey: 'vehiculeId' }); // une declaration concerne un seul vehicule
    db.vehicule.hasMany(db.declaration, { as: 'declarations', foreignKey: 'vehiculeId' }); // un vehicule peut avoir plusieurs declarations
    db.user.belongsToMany(db.role, { through: 'UserRole', as: 'roles', foreignKey: 'userId' });
    db.role.belongsToMany(db.user, { through: 'UserRole', as: 'users', foreignKey: 'roleId' });

    // sync all models with database
    await sequelize.sync({ alter: true });

}