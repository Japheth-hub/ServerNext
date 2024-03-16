const {getTodos} = require('../../controllers')

module.exports = async function TodosAll(req, res){
    try {
        const data = await getTodos()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}