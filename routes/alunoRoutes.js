const express = require('express');
const alunoController = require('../controllers/alunoController');

const router = express.Router();

router.post('/cadastro', alunoController.cadastrarAluno);

module.exports = router;
