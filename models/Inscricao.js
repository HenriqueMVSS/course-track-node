const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Aluno = require('./Aluno');
const Curso = require('./Curso');

const Inscricao = sequelize.define('inscricao', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  canceladoEm: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

Inscricao.belongsTo(Aluno);
Inscricao.belongsTo(Curso);

module.exports = Inscricao;
