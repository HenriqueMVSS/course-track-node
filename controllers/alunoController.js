const Aluno = require('../models/Aluno');

exports.cadastrarAluno = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const aluno = await Aluno.create({ nome, email, senha });
    res.status(201).json({ aluno });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao cadastrar aluno' });
  }
};
