import employerRepository from "../repositories/employer-repository";

async function cadastrarFuncionario(username, password, email, ongId) {
    try {
        return await employerRepository.cadastrarFuncionario(username, password, email, ongId)
    } catch (e) {
        throw new Error(e.message)
    }
}

export default {
    cadastrarFuncionario
}