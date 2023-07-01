const Curso = require('../models/Aluno');

exports.listarCursosDisponiveis = async (req, res) => {
  try {
    const cursos = await Curso.findAll({ where: { inicio: { $gt: new Date() } } });
    res.status(200).json({ cursos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar cursos disponíveis' });
  }
};
