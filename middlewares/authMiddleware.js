const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const verifyToken = (req, res, next) => {
  const token = req.body.token;
  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, 'secret', (err, decoded) => {
    console.log(decoded.id)
    if (err) {
      return res.status(403).json({ message: 'Falha na autenticação do token' });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
