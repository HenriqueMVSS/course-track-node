const Curso = require('../models/Curso');
const moment = require('moment');
const { Op } = require("sequelize");

exports.listarCursosDisponiveis = async (req, res) => {
  
  try {
    console.log( new Date() )
    today = moment(new Date()).format('YYYY-MM-DD');
    const cursos = await Curso.findAll({ where: { inicio: { [Op.gte]: today  }  } });
    res.status(200).json({ cursos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar cursos disponíveis' });
  }
};
