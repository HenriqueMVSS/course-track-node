
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database");


const Curso = sequelize.define('curso', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }
);

module.exports = Curso;
