let mongoose = require('mongoose')

let AgentSchema = mongoose.Schema({
    agent_info: {
        type: String,
        required: true
      },
    agent_location: {
      type: String,
    },
    agent_location_permission: {
      type: String,
    },
    agent_ip: {
      type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

let Agent  = module.exports = mongoose.model('agent', AgentSchema)