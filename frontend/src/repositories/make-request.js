import axios from "axios";

const DEFAULT_CONFIG = {
    withCredentials: true
}

export default {
    get: async (url, config = {}) => {
        return (await axios.get(url, { ...DEFAULT_CONFIG, ...config })).data
    },

    post: async (url, data, config = {}) => {
        return (await axios.post(url, data, { ...DEFAULT_CONFIG, ...config })).data
    },

    put: async (url, data, config = {}) => {
        return (await axios.put(url, data, { ...DEFAULT_CONFIG, ...config })).data
    },

    delete: async (url, config = {}) => {
        return (await axios.delete(url, { ...DEFAULT_CONFIG, ...config })).data
    },
}