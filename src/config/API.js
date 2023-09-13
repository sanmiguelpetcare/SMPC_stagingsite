import axios from 'axios';

const instance = axios.create({
    baseURL: "/api",
    timeout: 60000
});

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);

let requestTerminator = {
    GET: {},
    POST: {},
    PUT: {}
}

const CancelToken = axios.CancelToken;
const terminator = (method, url) => {
    if(requestTerminator[method][url]) {
        requestTerminator[method][url](`${method}: Endpoint ${url} was cancelled due to multiple requests.`);
    }
}


const Request = () => {
    return {
        get: async (url, params = {}, extras = {}) =>  {
            if(params.cancel === true) {
                terminator('GET', url)
            }
    
            return await instance.get(url, {
                params,
                cancelToken: new CancelToken(function executor(c) {
                    requestTerminator['GET'][url] = c;
                }),
                ...extras
            });
        },
        post: async (url, data, extras = {}) => {
            return await instance.post(url, data, {
                ...extras
            })
        },
        put: async (url, data, extras = {}) => {
            return await instance.put(url, data, {
                ...extras
            })
        },
        delete: async (url, params, extras = {}) => {
            return await instance.delete(url, {
                params,
                ...extras
            })
        }
    }
}

export default Request;