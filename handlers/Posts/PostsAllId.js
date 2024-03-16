const {getPosts} = require('../../controllers')

module.exports = async function PostsAllId(req, res){
    try {
        const {id} = req.params
        const data = await getPosts()
        const posts = data.filter(post => post.userId === parseInt(id))
        if(posts && posts.length > 0){
            res.status(200).json(posts)
        } else {
            res.status(404).send('No hay posteos')
        }
    } catch (error) {
        res.status(200).json(error)
    }
}
