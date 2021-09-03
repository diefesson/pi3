export class DomainError {
    constructor(message, cause) {
        this.message = message;
        this.cause = cause;
    }
}

export class IncorrectCredentialsError extends DomainError {
    constructor() {
        super("nome de usuário ou senha incorretos")
    }
}