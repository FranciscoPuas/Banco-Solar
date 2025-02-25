const sequelize = require('./connection/connection');
const Role = require('./models/rol');
const User = require('./models/user');

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true }); 
        console.log('Base de datos sincronizada');
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    } finally {
        await sequelize.close();
    }
};

syncDatabase();