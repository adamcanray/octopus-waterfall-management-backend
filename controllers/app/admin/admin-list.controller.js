const API  = require('../../../actions/index.action')
const Admin = require('../../../models/admin.model')

class AdminList extends API {
  constructor(){
    super(Admin)
  }
  async main(req, res, next){
    try {
      const population = []
      const data = await this.list(req.query, population)
      return res.status(200).json({
        status: 'success',
        message: 'data berhasil ditampilkan',
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

module.exports = AdminList