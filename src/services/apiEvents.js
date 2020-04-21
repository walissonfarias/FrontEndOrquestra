import axios from 'axios'

const api2 = axios.create({
    baseURL:"https://orquestraouropreto.herokuapp.com/"
})
export default api2