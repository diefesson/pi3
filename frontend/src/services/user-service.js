import userRepository from "../repositories/user-repository";

async function signIn(username, password) {
    try {
        return await userRepository.signIn(username, password)
    } catch (e) {
        throw new Error(e.message)
    }
}

export default {
    signIn
}