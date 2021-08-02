import userRepository from "../repositories/user-repository";

async function signIn(oid, uid, password) {
    try {
        return await userRepository.signIn(oid, uid, password)
    } catch (e) {
        throw new Error(e.message)
    }
}

export default {
    signIn
}