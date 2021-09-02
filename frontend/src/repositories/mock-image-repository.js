import { error, success } from "../errors/result"

export { success, error } from "../errors/result"

async function add(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => {
            resolve(success(reader.result))
        }
        reader.onerror = (e) => {
            reject(error(e))
        }
        reader.readAsDataURL(file)
    })
}

export default {
    add
}