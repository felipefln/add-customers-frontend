import axios from 'axios'

const api = axios.create({
    baseURL: 'https://add-customers-backend.herokuapp.com/',
})

export default api;