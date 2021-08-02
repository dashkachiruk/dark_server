const db = require('./../db_connection')

class CalendarController {
    async createCalendarEvent(req, res) {
        const {event_id, start_time, end_time, date, people_amount, available_amount} = req.body
        const newEvent = await db.query('INSERT into dark_schema.calendar (event_id, start_time, end_time, date, people_amount, available_amount) values ( $1, $2, $3, $4, $5, $6 ) RETURNING *', 
        [event_id, start_time, end_time, date, people_amount, available_amount])
        res.json(newEvent.rows[0])
    }

    async getCalendarEvents(req, res) {
        const events = await db.query('SELECT * FROM  dark_schema.calendar');
        res.json(events.rows)
    }

    async getOneEvent(req, res) {
        const id = req.params.id
        const event = await db.query('SELECT * FROM  dark_schema.calendar where id = $1', [id])
        res.json(event.rows[0]);
        
    }
    async updateEvent(req, res) {
        const {id, event_id, start_time, end_time, date, people_amount, available_amount}  = req.body
        const event = await db.query('UPDATE dark_schema.calendar set event_id = $2, start_time = $3, end_time = $4, date = $5, people_amount = $6, available_amount = $7 where id = $1 RETURNING *', 
        [id, event_id, start_time, end_time, date, people_amount, available_amount])
        res.json(event.rows[0]);

    }
    async deleteEvent(req, res) {
        const id = req.params.id
        const event = await db.query('DELETE FROM dark_schema.calendar where id = $1', [id])
        res.json(event.rows[0]);
    }
}

module.exports = new CalendarController()