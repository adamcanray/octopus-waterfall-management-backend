const API  = require('../../../actions/index.action')
const Admin = require('../../../models/admin.model')

class AdminShow extends API {
  constructor(){
    super(Admin)
  }
  async main(req, res, next){
    try {
      const query ={
        _id: req.params.id
      }
      const population = []
      const data = await this.show(query, population)
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

module.exports = AdminShow