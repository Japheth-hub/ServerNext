const {getTodos} = require('../../controllers')

module.exports = async function TodosAll(req, res){
    try {
        const {id} = req.params
        const data = await getTodos()
        const todo = data.find((item)=>item.id === parseInt(id))
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json(error)
    }
}