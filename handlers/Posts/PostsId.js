const {getPostId} = require('../../controllers')

module.exports = async function PostsId(req, res){
    try {
        const {id} = req.params
        const data = await getPostId(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
} 