const Router = require('express')
const calendarController = require('../controller/calendar.controller')
const router = new Router()

router.post('/calendar', calendarController.createCalendarEvent)
router.get('/calendar', calendarController.getCalendarEvents)
router.get('/calendar/:id', calendarController.getOneEvent)
router.put('/calendar', calendarController.updateEvent)
router.delete('/calendar/:id', calendarController.deleteEvent)

module.exports = router