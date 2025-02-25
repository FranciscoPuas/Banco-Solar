const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres://postgres:toltol12@localhost:5432/bancosolar');

module.exports = sequelize;