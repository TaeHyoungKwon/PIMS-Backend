const Sequelize = require('sequelize');
const env = process.env.NODE_ENV | 'development';
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

Object.keys(db).forEach(modelName => {
    if (db[modelName].assoicate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.sequelize = sequelize;

module.exports = db;