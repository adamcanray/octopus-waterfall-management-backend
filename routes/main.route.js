const AgentRoute = require('./app/agent.route')

const url = `/api`

const router = (app) => {
  app.use(`${url}/agent`, AgentRoute)
}

module.exports = router