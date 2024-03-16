module.exports = async function getUsers(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
    
        return data
    } catch (error) {
        return error
    }
}