const {getPosts} = require('../../controllers')

module.exports = async function PostsAll(req, res){
    try {
        const data = await getPosts()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).json(error)
    }
}
