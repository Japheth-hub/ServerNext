const {getTodos} = require('../../controllers')

module.exports = async function TodosAll(req, res){
    try {
        const {userId} = req.params
        const {status} = req.query
        const data = await getTodos()
        const todos = data.filter((todo)=>todo.userId === parseInt(userId))

        if(status && status === 'true'){
            const complete = todos.filter((todo)=> todo.completed === true)
            res.status(200).json(complete)
            return
        } else if(status && status === 'false') {
            const incomplete = todos.filter((todo)=> todo.completed === false)
            res.status(200).json(incomplete)
            return
        }

        if(todos && todos.length > 0) res.status(200).json(todos)
        else res.status(404).send('Not Found')
    } catch (error) {
        res.status(500).json(error)
    }
}