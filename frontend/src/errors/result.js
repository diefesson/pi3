export class Result {
    constructor(success) {
        this.success = success
    }

    isSuccess() {
        return this.success
    }

    isError() {
        return !this.success
    }
}

export class Success extends Result {
    constructor(value) {
        super(true)
        this.value = value
    }
}

export class Error extends Result {
    constructor(error) {
        super(false)
        this.error = error
    }
}

export function success(value) {
    return new Success(value)
}

export function error(value) {
    return new Error(value)
}