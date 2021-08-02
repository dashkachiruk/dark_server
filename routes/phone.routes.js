const Router = require('express')
const phoneController = require('../controller/phone.controller')
const router = new Router()

router.post('/phone', phoneController.createPhone)
router.get('/phone', phoneController.getPhones)
router.get('/phone/:id', phoneController.getOnePhone)
router.put('/phone', phoneController.updatePhone)
router.delete('/phone/:id', phoneController.deletePhone)

module.exports = router