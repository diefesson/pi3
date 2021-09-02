import postRepository from "../repositories/mock-post-repository";

async function findAll() {
    return await postRepository.findAll()
}

async function find(id) {
    return await postRepository.find(id)
}

async function add(post) {
    return await postRepository.add(post)
}

async function update(id, post) {
    return await postRepository.update(id, post)
}

async function remove(id) {
    return await postRepository.remove(id)
}

export default {
    findAll,
    find,
    add,
    update,
    remove
}