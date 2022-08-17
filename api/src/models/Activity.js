const { DataTypes } = require('sequilize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
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
            type: DataTypes.TEXT('Verano','Otoño','Invierno','Primavera'),
            allowNull: true,
        },

    });
};