import axios from "axios"
import { UserAlreadyExistsError } from "../errors/errors"

const cadastrarFuncURL = process.env.VUE_APP_BACKEND_URL + "/users"

async function cadastrarFuncionario(username, password, email, ongId) {
    try {
        var body = { username, password, email, ongId, isAdmin: true }
        var data = (await axios.post(cadastrarFuncURL, body)).data
        if (!data.success) {
            throw new UserAlreadyExistsError()
        }
    } catch (e) {
        throw new Error(e.message)
    }
}

export default {
    cadastrarFuncionario
}