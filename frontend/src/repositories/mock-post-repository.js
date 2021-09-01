import { success } from "../errors/result"


async function findAll() {
    console.log("mock-post-find-all")
    return success([
        {
            id: 0,
            description: "sample post 0",
            image: "https://via.placeholder.com/200x200",
            org: {
                id: 0,
                name: "org 0",
                image: "https://via.placeholder.com/200x200"
            },
        },
        {
            id: 1,
            description: "sample post 1",
            image: "https://via.placeholder.com/200x200",
            org: {
                id: 0,
                name: "org 0",
                image: "https://via.placeholder.com/200x200"
            },
        }
    ])
}

async function find(id) {
    console.log("mock-post-find")
    return success({
        id: 0,
        description: "sample post 0",
        image: "https://via.placeholder.com/200x200",
        org: {
            id: 0,
            name: "org 0",
            image: "https://via.placeholder.com/200x200"
        },
    })
}

async function add(post) {
    console.log("mock-post-add: " + post)
    return success(post)
}

async function update(id, post) {
    console.log("mock-post-update: " + id + ", " + post)
    return success(post)
}

async function remove(id) {
    console.log("mock-post-remove: " + id)
    return success({
        id: 0,
        description: "sample post 0",
        image: "https://via.placeholder.com/200x200",
        org: {
            id: 0,
            name: "org 0",
            image: "https://via.placeholder.com/200x200"
        }
    })
}

export default {
    findAll,
    find,
    add,
    remove,
    update
}