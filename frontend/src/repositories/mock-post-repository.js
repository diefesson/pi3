import { success } from "../errors/result"


async function findAll() {
    console.log("mock-post-find-all")
    return success([
        {
            id: 0,
            title: "post 0 title",
            description: "post 0 description",
            image: "https://via.placeholder.com/200x200",
            org: {
                id: 0,
                name: "org 0",
                image: "https://via.placeholder.com/200x200"
            },
        },
        {
            id: 1,
            title: "post 1 title",
            description: "post 1 description",
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
        id: id,
        title: "post " + id + " title",
        description: "post " + id + " description",
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
    return success({
        ...post,
        id: 10,
        org: {
            id: 0,
            name: "org 0",
            image: "https://via.placeholder.com/200x200"
        }
    })
}

async function update(id, post) {
    console.log("mock-post-update: " + id + ", " + post)
    return success({
        ...post,
        id: id,
        org: {
            id: 0,
            name: "org 0",
            image: "https://via.placeholder.com/200x200"
        }
    })
}

async function remove(id) {
    console.log("mock-post-remove: " + id)
    return success({
        id: id,
        title: "post 0 title",
        description: "post 0 description",
        image: "https://via.placeholder.com/200x200",
        org: {
            id: 0,
            name: "org 0",
            image: "https://via.placeholder.com/200x200"
        },
    })
}

export default {
    findAll,
    find,
    add,
    remove,
    update
}