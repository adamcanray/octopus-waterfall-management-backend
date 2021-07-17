const AgentRoute = require('./app/agent.route')
const AdminRoute = require('./app/admin.route')

const url = `/api`

const router = (app) => {
  app.use(`${url}/agent`, AgentRoute)
  app.use(`${url}/admin`, AdminRoute)
}

module.exports = router