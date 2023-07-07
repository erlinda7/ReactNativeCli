import axios from 'axios'

export const ReqResApi = axios.create ({
    baseURL: 'https://reqres.in/api'
})