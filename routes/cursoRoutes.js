const express = require('express');
const cursoController = require('../controllers/cursoController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/cursos-disponiveis', authMiddleware, cursoController.listarCursosDisponiveis);

module.exports = router;
