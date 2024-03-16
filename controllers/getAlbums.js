module.exports = async function(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/albums')
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}