const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/login', authController.login);

router.post('/logout', authMiddleware, (req, res) => {
 
    req.logout();
  
    res.clearCookie('token');
  
    res.status(200).json({ message: 'Logoff realizado com sucesso' });
  });

module.exports = router;
