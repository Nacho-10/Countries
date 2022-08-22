const { DataTypes } = require('sequilize');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres:postgres:nacho1234/dbcountries');

    const Activity = sequelize.define('Activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dificult: {
            type: DataTypes.FLOAT(1,2,3,4,5),
            allowNull: true,
        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        temporada: {
            type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'),
            allowNull: true,
        },
        
    });  
    module.exports = Activity; 
