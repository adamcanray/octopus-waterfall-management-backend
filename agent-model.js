var mongoose = require('mongoose');
// Setup schema
var agentSchema = mongoose.Schema({
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
});
// Export Agent model
var Agent = module.exports = mongoose.model('agent', agentSchema);
module.exports.get = function (callback, limit) {
    Agent.find(callback).limit(limit);
}