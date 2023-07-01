const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Inscricao = sequelize.define('inscricao', {
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  canceladoEm: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

module.exports = Inscricao;
