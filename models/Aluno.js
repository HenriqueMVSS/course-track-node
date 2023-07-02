const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/database');

const Aluno = sequelize.define('aluno', {
  
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

Aluno.beforeCreate(async (aluno) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(aluno.senha, salt);
  aluno.senha = hashedPassword;
});

module.exports = Aluno;
