import axios from 'axios'

const api2 = axios.create({
    baseURL:"https://orquestra-backend-staging.herokuapp.com/"
})
export default api2