module.exports = async function(postId){
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        const data = await res.json()
        return data 
    } catch (error) {
        return error
    }
}