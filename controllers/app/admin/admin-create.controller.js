const bycrypt = require('bcryptjs')
const API  = require('../../../actions/index.action')
const Admin = require('../../../models/admin.model')

class AdminCreate extends API {
  constructor(){
    super(Admin)
  }
  async main(req, res, next){
    try {
      const request_data = {
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: bycrypt.hashSync(req.body.password),
      }
      const data = await this.create(request_data)
      return res.status(201).json({
        status: 'success',
        message: 'data berhasil dibuat',
        data,
      })
    } catch (err) {
      return res.status(400).json({
        status: "error",
        message: err.message
      })
    }
  }
}

module.exports = AdminCreate