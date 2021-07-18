const jwt = require('jsonwebtoken')
const config = require('../configs/auth-admin.config')

verifyToken = (req, res, next) => {
  let token = req.headers['authorization']

  if(!token){
    return res.status(403).send({ message: `No token provieded!` })
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if(err){
      return res.status(401).send({ message: `Unauthorized!` })
    }
    req.userId = decoded.id
    next()
  })
}

module.exports = {
  verifyToken,
}