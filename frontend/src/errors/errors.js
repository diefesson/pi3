export class DomainError extends Error { }

export class UserAlreadyExistsError extends Error{
    constructor(){
        super("Email ou nome de usuários já usados, escolha outro")
    }
}
export class OngNotFoundError extends DomainError {
    constructor() {
        super("Ong não encontrada")
    }
}

export class UserNotFoundError extends DomainError {
    constructor() {
        super("Usuário não encontrado")
    }
}

export class IncorrectPasswordError extends DomainError {
    constructor() {
        super("Senha incorreta")
    }
}

// TODO: backend yet does not give sufficent info to use more specific errors
export class IncorrectCredentialsError extends DomainError {
    constructor(){
        super("nome de usuário ou senha incorretos")
    }
}