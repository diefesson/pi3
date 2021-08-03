const database = require("./database")

exports.get = (id) =>{
    return database.orgs.find((o) => o.id == id)
}