const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Curso = sequelize.define('curso', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  inicio: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Curso;
