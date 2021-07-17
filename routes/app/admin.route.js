const express = require('express')
const router = express.Router()

const AdminList = require('../../controllers/app/admin/admin-list.controller')
const AdminShow = require('../../controllers/app/admin/admin-show.controller')
const AdminCreate = require('../../controllers/app/admin/admin-create.controller')
const AdminUpdate = require('../../controllers/app/admin/admin-update.controller')
const AdminDelete = require('../../controllers/app/admin/admin-delete.controller')

/**
 * GET 
 * /api/admin
 */
router.get('/', async(req, res, next) => await new AdminList().main(req, res, next))
/**
 * GET 
 * /api/admin/:id
 */
router.get('/:id', async(req, res, next) => await new AdminShow().main(req, res, next))
/**
 * POST 
 * /api/admin/
 */
router.post('/', async(req, res, next) => await new AdminCreate().main(req, res, next))
/**
 * PATCH | PUT (maybe it's ok?) 
 * /api/admin/:id
 */
router.patch('/:id', async(req, res, next) => await new AdminUpdate().main(req, res, next))
/**
 * DELETE 
 * /api/admin/:id
 */
router.delete('/:id', async(req, res, next) => await new AdminDelete().main(req, res, next))


module.exports = router