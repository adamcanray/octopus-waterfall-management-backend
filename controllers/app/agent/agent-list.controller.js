const API  = require('../../../actions/index.action')
const Agent = require('../../../models/agent.model')

class AgentList extends API {
  constructor(){
    super(Agent)
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
      throw err
    }
  }
}

module.exports = AgentList