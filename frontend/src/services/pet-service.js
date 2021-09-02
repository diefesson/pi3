import petRepository from "../repositories/pet-repository";

async function cadastrarPet(title, race, age, sex, status, ongid) {
    try {
        return await petRepository.cadastrarPet(title, race, age, sex, status, ongid)
    } catch (e) {
        throw new Error(e.message)
    }
}

export default {
    cadastrarPet
}