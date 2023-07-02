const Inscricao = require('../models/Inscricao');

exports.realizarInscricao = async (req, res) => {
  const { cursoId } = req.body;
  const alunoId = req.user.id;

  try {
    const inscricao = await Inscricao.findOne({ where: { alunoId, cursoId } });

    if (inscricao) {
      return res.status(400).json({ message: 'Aluno já está inscrito neste curso' });
    }

    await Inscricao.create({ alunoId, cursoId, data: new Date() });

    res.status(201).json({ message: 'Inscrição realizada com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao realizar inscrição' });
  }
};

exports.cancelarInscricao = async (req, res) => {
  const { id } = req.params;
  const alunoId = req.user.id;

  try {
    const inscricao = await Inscricao.findOne({ where: { id, alunoId } });

    if (!inscricao) {
      return res.status(404).json({ message: 'Inscrição não encontrada' });
    }

    inscricao.canceladoEm = new Date();
    await inscricao.save();

    res.status(200).json({ message: 'Inscrição cancelada com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao cancelar inscrição' });
  }
};
