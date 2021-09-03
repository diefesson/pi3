import imageRepository from "../repositories/data-url-image-repository"

async function add(file) {
    return await imageRepository.add(file)
}

export default{
    add
}