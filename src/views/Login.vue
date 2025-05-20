<template>
  <div class="login">
    <div class="login-container">
      <h2>Вход</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="telegramId">Telegram ID</label>
          <input
            type="text"
            id="telegramId"
            v-model="form.telegramId"
            required
            placeholder="Введите ваш Telegram ID"
          >
        </div>
        <div class="form-group">
          <label for="password">Пароль</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
            placeholder="Введите пароль"
          >
        </div>
        <button type="submit" class="btn-login">Войти</button>
      </form>
      <p class="register-link">
        Нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
    <div class="flowers-bg"></div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const form = reactive({
      telegramId: '',
      password: ''
    })

    const handleSubmit = async () => {
      try {
        await store.dispatch('login', {
          telegramId: form.telegramId,
          password: form.password
        })
        router.push('/')
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleSubmit
    }
  }
}
</script>

<style scoped>
@import '@/assets/styles/variables.css';
@import '@/assets/styles/fonts.css';

.login {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.login-container {
  background: #fff;
  border: 1.5px solid var(--color-olive);
  border-radius: 2.2rem;
  padding: 3.2rem 2.8rem 2.5rem 2.8rem;
  max-width: 420px;
  width: 100%;
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: none;
}

h2 {
  font-family: 'Calypso', cursive;
  color: var(--color-brown);
  font-size: 2.2rem;
  margin-bottom: 2.2rem;
  text-align: center;
  letter-spacing: 1px;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  display: none;
}

input {
  width: 100%;
  max-width: 320px;
  padding: 1.1rem 1.2rem;
  border: 1.5px solid var(--color-input-border);
  border-radius: 1rem;
  font-size: 1.08rem;
  background: var(--color-input-bg);
  color: var(--color-brown);
  font-family: 'Lack', Arial, sans-serif;
  transition: border-color 0.3s, background-color 0.3s;
  margin-bottom: 0.2rem;
  box-sizing: border-box;
  text-align: left;
}

input::placeholder {
  color: #a89c91;
  opacity: 1;
  font-family: 'Lack', Arial, sans-serif;
  font-size: 1.08rem;
}

input:focus {
  outline: none;
  border-color: var(--color-btn-hover);
  background: #fff;
}

.btn-login {
  width: 100%;
  max-width: 320px;
  padding: 1.25rem 0;
  background: var(--color-pink);
  color: #fff;
  border: none;
  border-radius: 2rem;
  font-size: 1.18rem;
  font-family: 'Lack', Arial, sans-serif;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: background 0.3s, transform 0.2s;
  display: block;
  text-align: center;
}

.btn-login:hover {
  background: var(--color-light-pink);
  transform: translateY(-2px);
}

.register-link {
  text-align: center;
  color: #a89c91;
  font-family: 'Lack', Arial, sans-serif;
  margin-top: 1rem;
  font-size: 1rem;
}

.register-link a {
  color: var(--color-pink);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.register-link a:hover {
  color: var(--color-brown);
  text-decoration: underline;
}
</style> 