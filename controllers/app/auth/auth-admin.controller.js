const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../../../configs/auth-admin.config')
const API  = require('../../../actions/index.action')
const Admin = require('../../../models/admin.model')

class AuthAdmin extends API {
  constructor(){
    super(Admin)
  }
  async login(req, res, next){
    try {
      if(!req.body.username){
        return res.status(400).send({ message: 'Username is Required.' })
      }
      if(!req.body.password){
        return res.status(400).send({ message: 'Password is Required.' })
      }
      const admin = await this.show({ username: req.body.username })
      if(!admin){
        return res.status(404).send({ message: 'User Not Found.' })
      }
      const passwordIsValid = bycrypt.compareSync(
        req.body.password,
        admin.password,
      )
      if(!passwordIsValid){
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!'
        })
      }
      const token = jwt.sign({ id: admin.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      })
      return res.status(200).json({
        id: admin.id,
        username: admin.username,
        accessToken: token,
      })
    } catch (err) {
      return res.status(400).json({
        status: "error",
        message: err.message
      })
    }
  }
}

module.exports = AuthAdmin