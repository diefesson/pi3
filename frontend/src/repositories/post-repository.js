import makeRequest from "./make-request"

const URL = process.env.VUE_APP_BACKEND_URL + "/posts"

async function findAll() {
    return (await makeRequest.get(URL)).data
}

async function find(id) {
    return (await makeRequest.get(URL + "/" + id)).data
}

async function add(post) {
    return (await makeRequest.post(URL, post)).data
}

async function update(id, post) {
    return (await makeRequest.put(URL + "/" + id, post)).data
}

async function remove(id) {
    return (await makeRequest.delete(URL + "/" + id)).data
}

export default {
    findAll,
    find,
    add,
    remove,
    update
}