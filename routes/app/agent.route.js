const express = require('express')
const router = express.Router()

const AgentList = require('../../controllers/app/agent/agent-list.controller')

router.get('/', async(req, res, next) => await new AgentList().main(req, res, next))


module.exports = router