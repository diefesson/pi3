const database = require("./database")
<<<<<<< HEAD
//const orgRepository = require("./org-repository")
=======
const orgRepository = require("./org-repository")
>>>>>>> login

exports.getAll = () => {
    return database.posts.map((p) => {
        return {...p, org: orgRepository.get(p.orgId)}
    })
}