const { getUsers } = require('../../controllers')

module.exports = async function UsersAll(req, res) {
    try {
        const data = await getUsers()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send('Error de servidor')
    }
}
