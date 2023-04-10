import axios from 'axios'

export const Api = axios.create({
    baseURL: "htpps://reqres.in/api/"
});