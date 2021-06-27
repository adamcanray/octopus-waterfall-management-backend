const API  = require('../../../actions/index.action')
const Agent = require('../../../models/agent.model')

class AgentShow extends API {
  constructor(){
    super(Agent)
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

module.exports = AgentShow