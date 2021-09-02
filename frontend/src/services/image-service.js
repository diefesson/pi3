import imageRepository from "../repositories/mock-image-repository"

async function add(file) {
    return await imageRepository.add(file)
}

export default{
    add
}