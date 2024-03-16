module.exports = async function(id){
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}