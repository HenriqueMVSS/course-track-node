const express = require('express');
const inscricaoController = require('../controllers/inscricaoController');
const authMiddleware = require('../middlewares/authMiddleware');
const Aluno = require('../models/Aluno');

const router = express.Router();

router.post('/inscricao', authMiddleware, async (req, res) => {
    try {
   console.log(req)
      if (!req.user) {
        return res.status(401).json({ error: 'Apenas alunos logados podem realizar inscrição em cursos.' });
      }

      const userId = req.user.id;
      console.log(userId);
      const aluno = await Aluno.findOne({ where: { id: userId } });
  
      if (!aluno) {
        return res.status(401).json({ error: 'Você precisa ter um cadastro de aluno para realizar inscrição em cursos.' });
      }
  
      inscricaoController.realizarInscricao(req, res);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Ocorreu um erro ao realizar a inscrição.' });
    }
  });
  
  router.put('/inscricao/:id/cancelar', authMiddleware, async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Apenas alunos logados podem cancelar inscrições em cursos.' });
      }
  

      const userId = req.user.id;
      const aluno = await Aluno.findOne({ where: { id: userId } });
  
      if (!aluno) {
        return res.status(401).json({ error: 'Você precisa ter um cadastro de aluno para cancelar inscrições em cursos.' });
      }
   
      inscricaoController.cancelarInscricao(req, res);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Ocorreu um erro ao cancelar a inscrição.' });
    }
  });
  

module.exports = router;
