import request from "./request";

const URL = process.env.VUE_APP_BACKEND_URL + "/file"

async function add(file) {
    const formData = new FormData();
    formData.append("imagem", file)
    return request.post(
        URL,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
        (data) => data.imgurl
    )
}

export default {
    add
}