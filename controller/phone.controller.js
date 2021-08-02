const db = require('./../db_connection')

class PhoneController {
    async createPhone(req, res) {
        const {number} = req.body
        const newPhone = await db.query('INSERT into dark_schema.phones (number) values ( $1 ) RETURNING *', [number])
        res.json(newPhone.rows[0])
    }

    async getPhones(req, res) {
        const phones = await db.query('SELECT * FROM  dark_schema.phones');
        res.json(phones.rows)
    }

    async getOnePhone(req, res) {
        const id = req.params.id
        const phone = await db.query('SELECT * FROM  dark_schema.phones where id = $1', [id])
        res.json(phone.rows[0]);
        
    }
    async updatePhone(req, res) {
        const {id, number}  = req.body
        const phone = await db.query('UPDATE dark_schema.phones set number = $2 where id = $1 RETURNING *', [id, number])
        res.json(phone.rows[0]);

    }
    async deletePhone(req, res) {
        const id = req.params.id
        const phone = await db.query('DELETE FROM dark_schema.phones where id = $1', [id])
        res.json(phone.rows[0]);
    }
}

module.exports = new PhoneController()