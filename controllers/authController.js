const Aluno = require('../models/Aluno');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const aluno = await Aluno.findOne({ where: { email } });

    if (!aluno) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const senhaCorreta = await bcrypt.compare(senha, aluno.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ id: aluno.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao realizar login' });
  }
};
