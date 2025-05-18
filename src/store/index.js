import { createStore } from 'vuex'
import axios from 'axios'
import theme from './modules/theme'

export default createStore({
  modules: {
    theme
  },
  state: {
    user: null,
    token: localStorage.getItem('token') || null
  },
  getters: {
    isAuthenticated: state => !!state.token,
    currentUser: state => state.user
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    SET_USER(state, user) {
      state.user = user
    },
    CLEAR_AUTH(state) {
      state.token = null
      state.user = null
      localStorage.removeItem('token')
    }
  },
  actions: {
    async register({ commit }, credentials) {
      try {
        const response = await axios.post('/api/auth/register', credentials)
        const { token, user } = response.data
        commit('SET_TOKEN', token)
        commit('SET_USER', user)
        return user
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Ошибка при регистрации')
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('/api/auth/login', credentials)
        const { token, user } = response.data
        commit('SET_TOKEN', token)
        commit('SET_USER', user)
        return user
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Ошибка при входе')
      }
    },
    logout({ commit }) {
      commit('CLEAR_AUTH')
    }
  }
}) 