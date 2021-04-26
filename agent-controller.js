// Import agent model
Agent = require('./agent-model');
// Handle index actions
exports.index = function (req, res) {
    Agent.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Agents retrieved successfully",
            data: contacts
        });
    });
};
// Handle create agent actions
exports.new = function (req, res) {
    var agent = new Agent();
    agent.agent_info = req.body.agent_info ? req.body.agent_info : agent.agent_info;
    agent.agent_location = req.body.agent_location;
    agent.agent_location_permission = req.body.agent_location_permission;
    agent.agent_ip = req.body.agent_ip;
// save the agent and check for errors
    agent.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New agent created!',
            data: agent
        });
    });
};
// Handle view agent info
exports.view = function (req, res) {
    Agent.findById(req.params.contact_id, function (err, agent) {
        if (err)
            res.send(err);
        res.json({
            message: 'Agent details loading..',
            data: agent
        });
    });
};
// Handle update agent info
exports.update = function (req, res) {
Agent.findById(req.params.contact_id, function (err, agent) {
        if (err)
            res.send(err);
            agent.agent_info = req.body.agent_info ? req.body.agent_info : agent.agent_info;
    agent.agent_location = req.body.agent_location;
    agent.agent_location_permission = req.body.agent_location_permission;
    agent.agent_ip = req.body.agent_ip;
// save the agent and check for errors
        agent.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Agent Info updated',
                data: agent
            });
        });
    });
};
// Handle delete agent
exports.delete = function (req, res) {
    Agent.remove({
        _id: req.params.agent_id
    }, function (err, agent) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Agent deleted'
        });
    });
};