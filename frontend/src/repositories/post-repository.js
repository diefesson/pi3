import request from "./request"

const URL = process.env.VUE_APP_BACKEND_URL + "/posts"

async function findAll() {
    return (await request.get(URL, {}, (posts) =>{
        return posts.map(mapFrom)
    }))
}

async function find(id) {
    return (await request.get(URL + "/" + id, {}, (posts) =>{
        return mapFrom(posts[0])
    }))
}

async function add(post) {
    return (await request.post(URL, mapTo(post)))
}

async function update(id, post) {
    return (await request.put(URL + "/" + id, mapTo(post)))
}

async function remove(id) {
    return (await request.delete(URL + "/" + id))
}

// backend is not fully conformant to the specification
// so its necessary to apply some transformations
const ONG_IMAGE_PLACEHOLDER = process.env.VUE_APP_PLACEHOLDER_URL ||
 "https://via.placeholder.com/200?text=PET"

function mapTo(post) {
    return {
        title: post.title,
        description: post.description,
        imgurl: post.image,
        ongid: post.org.id,
    }
}

function mapFrom(post) {
    return {
        id: post.id,
        title: post.title,
        description: post.description,
        image: post.imgurl,
        org: {
            name: post.ong.name,
            image: ONG_IMAGE_PLACEHOLDER
        }
    }
}

export default {
    findAll,
    find,
    add,
    remove,
    update
}