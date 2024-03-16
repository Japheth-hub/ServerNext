module.exports = async function getComments(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}