const express = require('express');
const app = express();
const cors = require('cors');
const alunoRoutes = require('./routes/alunoRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const inscricaoRoutes = require('./routes/inscricaoRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use(cors());

app.use('/alunos', alunoRoutes);
app.use('/cursos', cursoRoutes);
app.use('/inscricoes', inscricaoRoutes);
app.use('/auth', authRoutes);

module.exports = app;
