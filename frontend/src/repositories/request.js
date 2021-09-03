import axios from "axios";
import { processAPIError } from "../errors/api-errors";
import { success, error } from "../errors/result"

const DEFAULT_CONFIG = {
    // cors is misconfigured on backend
    // so withCredentials cannot be used
    withCredentials: true
}

async function processResponse(responsePromise, mapper) {
    try {
        let data = (await responsePromise).data
        if (mapper != null) {
            data = mapper(data)
        }
        return success(data)
    } catch (e) {
        return error(processAPIError(e))
    }
}

export default {
    get: async (url, config = {}, mapper = null) => {
        return processResponse(
            axios.get(url, { ...DEFAULT_CONFIG, ...config }),
            mapper
        )
    },

    post: async (url, data, config = {}, mapper) => {
        return processResponse(
            axios.post(url, data, { ...DEFAULT_CONFIG, ...config }),
            mapper
        )
    },

    put: async (url, data, config = {}, mapper) => {
        return processResponse(
            axios.put(url, data, { ...DEFAULT_CONFIG, ...config }),
            mapper
        )
    },

    delete: async (url, config = {}, mapper) => {
        return processResponse(
            axios.delete(url, { ...DEFAULT_CONFIG, ...config }),
            mapper
        )
    },
}