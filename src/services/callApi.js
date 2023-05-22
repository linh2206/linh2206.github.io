import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
    // 'Access-Control-Request-Origin': '*',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials': 'true',
    // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    // 'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization',
};

axios.interceptors.request.use(
    function (config) {
        config.headers = {
            ...headers,
            ...config.headers,
        };
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);


const callApi = async (
    endpoint,
    method,
    body,
    headers,
    responseType = 'json',
) => {
    const baseUrl = `${process.env.REACT_APP_BE_HOST}/api/`;
    const url = baseUrl + endpoint;
    return axios({
        url: url,
        method: method,
        data: body || {},
        headers,
        responseType,
    })
        .then((res) => {
            return res
        })
        .catch((err) => {
            console.error('ERR ~ ', err);
            throw err;
        });
};

export default callApi;
