const express = require('express')
const router = express.Router()

const AgentList = require('../../controllers/app/agent/agent-list.controller')
const AgentShow = require('../../controllers/app/agent/agent-show.controller')
const AgentCreate = require('../../controllers/app/agent/agent-create.controller')
const AgentUpdate = require('../../controllers/app/agent/agent-update.controller')
const AgentDelete = require('../../controllers/app/agent/agent-delete.controller')

/**
 * GET 
 * /api/agent
 */
router.get('/', async(req, res, next) => await new AgentList().main(req, res, next))
/**
 * GET 
 * /api/agent/:id
 */
router.get('/:id', async(req, res, next) => await new AgentShow().main(req, res, next))
/**
 * POST 
 * /api/agent/
 */
router.post('/', async(req, res, next) => await new AgentCreate().main(req, res, next))
/**
 * PATCH | PUT (maybe it's ok?) 
 * /api/agent/:id
 */
router.patch('/:id', async(req, res, next) => await new AgentUpdate().main(req, res, next))
/**
 * DELETE 
 * /api/agent/:id
 */
router.delete('/:id', async(req, res, next) => await new AgentDelete().main(req, res, next))


module.exports = router