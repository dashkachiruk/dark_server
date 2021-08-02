const Router = require('express')
const reviewController = require('../controller/review.controller')
const router = new Router()

router.post('/review', reviewController.createReview)
router.get('/review', reviewController.getReviews)
router.get('/review/:id', reviewController.getOneReview)
router.put('/review', reviewController.updateReview)
router.delete('/review/:id', reviewController.deleteReview)

module.exports = router