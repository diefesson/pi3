import axios from "axios"
import {InvalidUserError } from "../errors/errors"

const cadastrarFuncURL = process.env.VUE_APP_BACKEND_URL + "/users"

async function cadastrarFuncionario(username, password, email, ongId) {
    try{
        console.log(cadastrarFuncURL) // TODO: remove me
        var success = (await axios.post(cadastrarFuncURL, {username, password, email, ongId})).data.success
        if (!success){
            throw new InvalidUserError()
        }
    } catch(e){
        throw new Error(e.message)
    }
}

export default{
    cadastrarFuncionario
}