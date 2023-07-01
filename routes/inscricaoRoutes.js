const express = require('express');
const inscricaoController = require('../controllers/inscricaoController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/inscricao', authMiddleware, inscricaoController.realizarInscricao);
router.put('/inscricao/:id/cancelar', authMiddleware, inscricaoController.cancelarInscricao);

module.exports = router;
