const db = require('./../db_connection')

class EventController {
    async createEvent(req, res) {
        const {img, name, description, duration, people_amount, cost, adults, family, children, corporate, couple} = req.body
        const newEvent = await db.query('INSERT into dark_schema.events (img, name, description, duration, people_amount, cost, adults, family, children, corporate, couple) values ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 ) RETURNING *', 
        [img, name, description, duration, people_amount, cost, adults, family, children, corporate, couple])
        res.json(newEvent.rows[0])
    }

    async getEvents(req, res) {
        const events = await db.query('SELECT * FROM  dark_schema.events');
        res.json(events.rows)
    }

    async getOneEvent(req, res) {
        const id = req.params.id
        const event = await db.query('SELECT * FROM  dark_schema.events where id = $1', [id])
        res.json(event.rows[0]);
        
    }
    async updateEvent(req, res) {
        const {id, img, name, description, duration, people_amount, cost, adults, family, children, corporate, couple}  = req.body
        const event = await db.query('UPDATE dark_schema.events set img = $2, name = $3, description = $4, duration = $5, people_amount = $6, cost = $7, adults = $8, family = $9, children = $10, corporate = $11, couple = $12 where id = $1 RETURNING *', 
        [id, img, name, description, duration, people_amount, cost, adults, family, children, corporate, couple])
        res.json(event.rows[0]);

    }
    async deleteEvent(req, res) {
        const id = req.params.id
        const event = await db.query('DELETE FROM dark_schema.events where id = $1', [id])
        res.json(event.rows[0]);
    }
}

module.exports = new EventController()