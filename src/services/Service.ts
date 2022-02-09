import axios, { AxiosInstance } from "axios"

const NodeAPI : AxiosInstance = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Expose-Headers' : 'Access-Control-',
        'Access-Control-Allow-Headers': 'Access-Control-, Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
        'Access-Control-Allow-Origin': '*',
        Allow: 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    },
});

export { NodeAPI}