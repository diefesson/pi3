import axios from "axios";
import { processAPIError } from "../errors/errors";
import { success, error } from "../errors/result"

const DEFAULT_CONFIG = {
    // cors is misconfigured on backend
    // so withCredentials cannot be used
    // withCredentials: true
}

async function processResponse(responsePromise) {
    try {
        return success((await responsePromise).data)
    } catch (e) {
        return error(processAPIError(e))
    }
}

export default {
    get: async (url, config = {}) => {
        return processResponse(
            axios.get(url, { ...DEFAULT_CONFIG, ...config })
        )
    },

    post: async (url, data, config = {}) => {
        return processResponse(
            axios.post(url, data, { ...DEFAULT_CONFIG, ...config })
        )
    },

    put: async (url, data, config = {}) => {
        return processResponse(
            axios.put(url, data, { ...DEFAULT_CONFIG, ...config })
        )
    },

    delete: async (url, config = {}) => {
        return processResponse(
            axios.delete(url, { ...DEFAULT_CONFIG, ...config })
        )
    },
}