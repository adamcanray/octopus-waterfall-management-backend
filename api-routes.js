// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to octopus-waterfall-management-backend crafted with love!',
    });
});
// Import agent controller
var agentController = require('./agent-controller');
// agent routes
router.route('/agents')
    .get(agentController.index)
    .post(agentController.new);
router.route('/agents/:agent_id')
    .get(agentController.view)
    .patch(agentController.update)
    .put(agentController.update)
    .delete(agentController.delete);
// Export API routes
module.exports = router;
