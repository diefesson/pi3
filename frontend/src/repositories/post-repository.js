import request from "./request"

const URL = process.env.VUE_APP_BACKEND_URL + "/posts"

async function findAll() {
    return (await request.get(URL))
}

async function find(id) {
    return (await request.get(URL + "/" + id))
}

async function add(post) {
    return (await request.post(URL, post))
}

async function update(id, post) {
    return (await request.put(URL + "/" + id, post))
}

async function remove(id) {
    return (await request.delete(URL + "/" + id))
}

export default {
    findAll,
    find,
    add,
    remove,
    update
}