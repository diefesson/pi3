import axios from "axios"

const url = process.env.VUE_APP_BACKEND_URL + "/posts"

async function getAll() {
<<<<<<< HEAD
    return (await axios.get(url)).data
=======
    const d = (await axios.get(url)).data
    console.log(d) // todo: remove me
    return d
>>>>>>> login
}

export default {
    getAll
}