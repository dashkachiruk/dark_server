const db = require('./../db_connection')

class ReviewController {
    async createReview(req, res) {
        const {author, stars, date, img, text, link} = req.body
        const newReview = await db.query('INSERT into dark_schema.reviews (author, stars, date, img, text, link) values ( $1, $2, $3, $4, $5, $6 ) RETURNING *', 
        [author, stars, date, img, text, link])
        res.json(newReview.rows[0])
    }

    async getReviews(req, res) {
        const reviews = await db.query('SELECT * FROM  dark_schema.reviews');
        res.json(reviews.rows)
    }

    async getOneReview(req, res) {
        const id = req.params.id
        const review = await db.query('SELECT * FROM  dark_schema.reviews where id = $1', [id])
        res.json(review.rows[0]);
        
    }
    async updateReview(req, res) {
        const {id, author, stars, date, img, text, link}  = req.body
        const review = await db.query('UPDATE dark_schema.reviews set author = $2, stars = $3, date = $4, img = $5, text = $6, link = $7 where id = $1 RETURNING *', 
        [id, author, stars, date, img, text, link])
        res.json(review.rows[0]);

    }
    async deleteReview(req, res) {
        const id = req.params.id
        const review = await db.query('DELETE FROM dark_schema.reviews where id = $1', [id])
        res.json(review.rows[0]);
    }
}

module.exports = new ReviewController()