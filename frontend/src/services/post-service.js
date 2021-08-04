import postRepository from "../repositories/post-repository";

async function getAll() {
    return await postRepository.getAll()
}

export default {
    getAll
}