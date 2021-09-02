import userRepository from "../repositories/user-repository";

async function signIn(username, password) {
    return await userRepository.signIn(username, password)
}

function getSession(){
    return userRepository.getSession()
}

function clearSession(){
    userRepository.clearSession()
}

export default {
    signIn,
    getSession,
    clearSession
}