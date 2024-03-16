const {getUsers} = require('../../controllers')

module.exports = async function UsersName(req, res){
    try {
        const {name} = req.params
        const data = await getUsers()
        const User = data.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()))
        if(User && User.length > 0){
            res.status(200).json(User)
            return
        } else {
            res.status(404).send('No hay usuarios con ese nombre')
        }
    } catch (error) {
        res.staus(500).json(error)
    }
}