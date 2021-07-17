const { request } = require('express')
const API  = require('../../../actions/index.action')
const Admin = require('../../../models/admin.model')

class AdminUpdate extends API {
  constructor(){
    super(Admin)
  }
  async main(req, res, next){
    try {
      const query = {
        _id: req.params.id
      }
      const request_data = {
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
      }
      const options = {
        new: true,
      }
      const data = await this.update(query, request_data, options)
      return res.status(200).json({
        status: 'success',
        message: 'data berhasil diubah',
        data
      })
    } catch (err) {
      return res.status(400).json({
        status: "error",
        message: err.message
      })
    }
  }
}

module.exports = AdminUpdate