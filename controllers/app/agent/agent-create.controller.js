const API  = require('../../../actions/index.action')
const Agent = require('../../../models/agent.model')

class AgentCreate extends API {
  constructor(){
    super(Agent)
  }
  async main(req, res, next){
    try {
      const request_data = {
        agent_info: req.body.agent_info ? req.body.agent_info : '',
        agent_location: req.body.agent_location,
        agent_location_permission: req.body.agent_location_permission,
        agent_ip: req.ip
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

module.exports = AgentCreate