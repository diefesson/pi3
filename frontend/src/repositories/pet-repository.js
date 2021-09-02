import axios from "axios"
import { UserAlreadyExistsError } from "../errors/errors"

const cadastrarPetURL = "http://localhost:3000/pets"

async function cadastrarPet(title, race, age, sex, status, ongid) {
    try {
        var body = { title, race, age, sex, status, ongid, isAdmin: true }
        var data = (await axios.post(cadastrarPetURL, body)).data
        if (!data.success) {
            throw new UserAlreadyExistsError()
        }
    } catch (e) {
        throw new Error(e.message)
    }
}

export default {
    cadastrarPet
}