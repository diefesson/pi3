export class DomainError extends Error { }

export class OrgNotFoundError extends DomainError {
    constructor() {
        super("Org not found")
    }
}

export class UserNotFoundError extends DomainError {
    constructor() {
        super("User not found")
    }
}

export class IncorrectPasswordError extends DomainError {
    constructor() {
        super("Incorrect password")
    }
}

// TODO: backend yet does not give sufficent info to use more specific errors
export class IncorrectCredentialsError extends DomainError {
    constructor(){
        super("Incorrect username or password")
    }
}