const mongoose = require('mongoose')
require('dotenv').config()

const HOST = process.env.DB_CONNECTION


mongoose.connect(HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(err => {
  console.error('cannot connect to mongo server')
  throw err
})