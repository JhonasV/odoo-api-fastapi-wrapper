import axios  from 'axios'

let domain = 'http://127.0.0.1:8000'
let baseURL: string = '/api/v1'
const axiosInstance = axios.create({
    baseURL: `${domain}${baseURL}`,
    timeout: 5000,
})

export default axiosInstance
