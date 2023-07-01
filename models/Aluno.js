const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/database');

const Aluno = sequelize.define('aluno', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Aluno.beforeCreate(async (aluno) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(aluno.senha, salt);
  aluno.senha = hashedPassword;
});

module.exports = Aluno;
