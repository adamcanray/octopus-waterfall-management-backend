const { createApp } = require('./app')
const app = createApp()
require('./server/db')

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`HTTP server running on port ${port}`)
})