const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let cors = require('cors')

const createApp = () => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cors())
  require('./routes/main.route')(app)
  return app
}

/**
 * configure https here 
 * ....
 */

module.exports = { createApp }