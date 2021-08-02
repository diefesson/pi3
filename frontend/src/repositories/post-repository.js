import axios from "axios"

const url = process.env.VUE_APP_BACKEND_URL + "/posts"

async function getAll() {
    const d = (await axios.get(url)).data
    console.log(d) // todo: remove me
    return d
}

export default {
    getAll
}