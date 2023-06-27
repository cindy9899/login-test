import axios from 'axios';

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

export const axiosInstance = axios.create({
    baseURL: API_HOST,
    headers: {
        'Content-Type': `application/json;charset=UTF-8`,
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
    },
});