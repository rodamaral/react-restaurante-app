import axios from 'axios';

const baseURL = process.env.REACT_APP_API

const api = axios.create({
    baseURL
});

export default api;
