const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/connection'); // Asegúrate de tener tu configuración de base de datos aquí

class Role extends Model {}

Role.init({
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Role: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Role',
    tableName: 'Roles',
    timestamps: false,
});

module.exports = Role;