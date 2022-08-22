const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres:postgres:nacho1234/dbcountries');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

  // defino el modelo
  const Country = sequelize.define('country', {
    id: {
      type: DataTypes.VARCHAR(3),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    poblacion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  module.exports = Country;
