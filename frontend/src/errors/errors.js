export class DomainError {
    constructor(message, cause) {
        this.message = message;
        this.cause = cause;
    }
}

// TODO: backend yet does not give sufficent info to use more specific errors
export class IncorrectCredentialsError extends DomainError {
    constructor() {
        super("nome de usuário ou senha incorretos")
    }
}