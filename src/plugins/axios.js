import axios from 'axios'
import store from '../store'

// Создаем экземпляр axios с базовым URL
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000'
})

// Добавляем перехватчик запросов
instance.interceptors.request.use(
  config => {
    const token = store.state.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Добавляем перехватчик ответов
instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      store.dispatch('logout')
    }
    return Promise.reject(error)
  }
)

export default instance 