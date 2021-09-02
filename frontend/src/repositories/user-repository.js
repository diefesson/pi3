import { IncorrectCredentialsError } from "../errors/errors"
import request from "./request"

import { success, error } from "../errors/result"

const loginUrl = process.env.VUE_APP_BACKEND_URL + "/login"

async function signIn(username, password) {
    const result = await request.post(loginUrl, { username, password })
    if (result.isSuccess()) {
        const data = result.value
        if (data.success) {
            // for some reason the backend is returning the password too
            // i dont want to store it
            const session = { ...data.user[0], password: undefined }
            setSession(session)
            return success(session)
        } else {
            return error(new IncorrectCredentialsError())
        }
    } else {
        return result
    }
}

function setSession(session) {
    localStorage.setItem("session", JSON.stringify(session))
}

function getSession() {
    const json = localStorage.getItem("session")
    if (json != null) {
        return JSON.parse(json)
    } else {
        return null
    }
}

function clearSession() {
    localStorage.removeItem("session")
}

export default {
    signIn,
    getSession,
    clearSession
}