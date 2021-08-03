import sleep from "../utils/sleep"

import {
    OrgNotFoundError,
    UserNotFoundError,
    IncorrectPasswordError
}
    from "../errors/errors"

const expectedOid = "test-org"
const expectedUid = "diefesson"
const expectedPassword = "12345678"

// TODO: use axios when backend sign in is implemented
async function signIn(oid, uid, password) {
    await sleep(1000)
    if (oid !== expectedOid) {
        throw new OrgNotFoundError()
    }
    if (uid !== expectedUid) {
        throw new UserNotFoundError()
    }
    if (password !== expectedPassword) {
        throw new IncorrectPasswordError()
    }
    return { oid, uid, isAdmin: true }
}

export default{
    signIn
}