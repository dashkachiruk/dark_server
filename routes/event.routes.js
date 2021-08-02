const Router = require('express')
const eventController = require('../controller/event.controller')
const router = new Router()

router.post('/event', eventController.createEvent)
router.get('/event', eventController.getEvents)
router.get('/event/:id', eventController.getOneEvent)
router.put('/event', eventController.updateEvent)
router.delete('/event/:id', eventController.deleteEvent)

module.exports = router