import { DomainError } from "./errors"

export class APIError extends DomainError {
    constructor(message, request) {
        super(message)
        this.request = request
    }
}

export class NoResponseError extends APIError {
    constructor(request) {
        super("no response", request)
    }
}

export class BadRequest extends APIError {
    constructor(request, response) {
        super("bad request", request, response)
    }
}

export class UnknownAPIError extends APIError {
    constructor(request, response) {
        super("unknown api error", request, response)
    }
}

export function processAPIError(axiosError) {
    if (axiosError.response) {
        switch (axiosError.response.status) {
            // if the backend returned a way to better identify, it could be used over http status
            case 400:
                return new BadRequest(axiosError.request, axiosError.response)
            default:
                return new UnknownAPIError(axiosError.request, axiosError.response)
        }

    } else {
        return new NoResponseError(axiosError.request)
    }
}