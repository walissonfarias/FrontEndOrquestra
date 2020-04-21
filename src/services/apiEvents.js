import axios from 'axios'

const api2 = axios.create({
    baseURL:process.env.REACT_APP_API_URL
})
export default api2
