const { request } = require('express')
const API  = require('../../../actions/index.action')
const Agent = require('../../../models/agent.model')

class AgentUpdate extends API {
  constructor(){
    super(Agent)
  }
  async main(req, res, next){
    try {
      const query = {
        _id: req.params.id
      }
      const request_data = {
        agent_info: req.body.agent_info ? req.body.agent_info : '',
        agent_location: req.body.agent_location,
        agent_location_permission: req.body.agent_location_permission,
        agent_ip: req.ip
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

module.exports = AgentUpdate