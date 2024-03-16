module.exports = async function getPosts(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()

        return data
    } catch (error) {
        return error
    }
}