const express = require('express')
const router = express.Router()

const AuthAdmin = require('../../controllers/app/auth/auth-admin.controller')

/**
 * POST 
 * /api/auth-admin/login
 */
router.post('/login', async(req, res, next) => await new AuthAdmin().login(req, res, next))

module.exports = router