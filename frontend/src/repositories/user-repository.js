import axios from "axios"
import {IncorrectCredentialsError } from "../errors/errors"

const loginUrl = process.env.VUE_APP_BACKEND_URL + "/login"

async function signIn(username, password) {
    try{
        var success = (await axios.post(loginUrl, {username, password})).data.success
        if (success){
            return {ong: "test-ong", username, isAdmin: true}
        } else {
            throw new IncorrectCredentialsError()
        }
    } catch(e){
        throw new Error(e.message)
    }
}

export default{
    signIn
}