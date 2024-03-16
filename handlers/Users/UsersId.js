const {getUsers} = require('../../controllers')

module.exports = async function UsersId(req, res){
    try {
        const {id} = req.params
        const data = await getUsers()
        const User = data.find((user)=> user.id === parseInt(id))
        if(User){
            res.status(200).json(User)
            return
        } else {
            res.status(404).send('No existe Usuario con ese Id')
        }
    } catch (error) {
        res.status(500).json(error)
    }
}