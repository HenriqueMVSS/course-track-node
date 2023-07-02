const express = require('express');
const cursoController = require('../controllers/cursoController');
const authMiddleware = require('../middlewares/authMiddleware');
const Aluno = require('../models/Aluno');

const router = express.Router();

router.get('/cursos-disponiveis', authMiddleware, async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Apenas alunos logados podem visualizar os cursos disponíveis.' });
      }
  
      const userId = req.user.id;
      const aluno = await Aluno.findOne({ where: { id: userId } }); 
  
      if (!aluno) {
        return res.status(401).json({ error: 'Você precisa ter um cadastro de aluno para visualizar os cursos disponíveis.' });
      }

      cursoController.listarCursosDisponiveis(req, res);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Ocorreu um erro ao listar os cursos disponíveis.' });
    }
  });
module.exports = router;
