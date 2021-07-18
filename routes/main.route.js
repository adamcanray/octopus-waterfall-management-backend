const AgentRoute = require('./app/agent.route')
const AdminRoute = require('./app/admin.route')
const AuthAdminRoute = require('./app/auth-admin.route')

const url = `/api`

const router = (app) => {
  app.use(`${url}/agent`, AgentRoute)
  app.use(`${url}/admin`, AdminRoute)
  app.use(`${url}/auth-admin`, AuthAdminRoute)
}

module.exports = router