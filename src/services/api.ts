import axios from "axios";

const api = axios.create({
  baseURL: 'http://192.168.2.67:3333'
})

api.interceptors.request.use((config) => {
  console.log('interceptor', config)
  return config

}, (error) => {
  return Promise.reject(error)
})

export { api }