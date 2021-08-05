import axios from "axios"

const cadastrarFuncURL = process.env.VUE_APP_BACKEND_URL + "/users"

async function cadastrarFuncionario(username, password, email, ongId) {
    try{
        // TODO: the backend yet not returns info for accurate error handling
        await axios.post(cadastrarFuncURL, {username, password, email, ongId, isAdmin: true})
    } catch(e){
        throw new Error(e.message)
    }
}

export default{
    cadastrarFuncionario
}