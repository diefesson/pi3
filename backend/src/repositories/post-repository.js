const database = require("./database")
//const orgRepository = require("./org-repository")

exports.getAll = () => {
    return database.posts.map((p) => {
        return {...p, org: orgRepository.get(p.orgId)}
    })
}