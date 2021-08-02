import axios from "axios"

const url = process.env.VUE_APP_BACKEND_URL + "/posts"

async function getAll() {
    return (await axios.get(url)).data
}

export default {
    getAll
}