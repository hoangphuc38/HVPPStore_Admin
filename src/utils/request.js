import axios from 'axios';

const request = axios.create({
    baseURL: 'https://localhost:7030/api/'
})

export default request;