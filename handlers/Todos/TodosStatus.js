const {getTodos} = require('../../controllers')

module.exports = async function TodosStatus(req, res){
    try {
        const {status} = req.params
        const data = await getTodos()
        if(status === 'true'){
            const complete = data.filter((todo) => todo.completed === true)
            res.status(200).json(complete)
        } else {
            const incomplet = data.filter((todo) => todo.completed === false)
            res.status(200).json(incomplet)
        }
    } catch (error) {
        res.status(500).json(error)
    }
}