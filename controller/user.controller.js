const db = require('./../db_connection')

class UserController {
    async createUser(req, res) {
        const {name, pass} = req.body
        const newPerson = await db.query('INSERT into dark_schema.users (name, pass) values ( $1, $2 ) RETURNING *', [name, pass])
        res.json(newPerson.rows[0])

    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM  dark_schema.users');
        res.json(users.rows)
        
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM  dark_schema.users where id = $1', [id])
        res.json(user.rows[0]);
        
    }
    async updateUser(req, res) {
        const {id, name, pass}  = req.body
        const user = await db.query('UPDATE dark_schema.users set name = $2, pass = $3 where id = $1 RETURNING *', [id, name, pass])
        res.json(user.rows[0]);

    }
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM dark_schema.users where id = $1', [id])
        res.json(user.rows[0]);
    }
}

module.exports = new UserController()