<template>
  <div class="register">
    <div class="register-container">
      <h2>Регистрация</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="firstName">Имя</label>
          <input
            type="text"
            id="firstName"
            v-model="form.firstName"
            required
            placeholder="Введите ваше имя"
          >
        </div>
        <div class="form-group">
          <label for="lastName">Фамилия</label>
          <input
            type="text"
            id="lastName"
            v-model="form.lastName"
            required
            placeholder="Введите вашу фамилию"
          >
        </div>
        <div class="form-group">
          <label for="phoneNum">Телефон</label>
          <input
            type="tel"
            id="phoneNum"
            v-model="form.phoneNum"
            required
            placeholder="Введите номер телефона"
          >
        </div>
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
          <label for="address">Адрес</label>
          <input
            type="text"
            id="address"
            v-model="form.address"
            required
            placeholder="Введите ваш адрес"
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
        <div class="form-group">
          <label for="confirmPassword">Подтвердите пароль</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="form.confirmPassword"
            required
            placeholder="Подтвердите пароль"
          >
        </div>
        <button type="submit" class="btn-register">Зарегистрироваться</button>
      </form>
      <p class="login-link">
        Уже есть аккаунт? <router-link to="/login">Войти</router-link>
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
  name: 'Register',
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const form = reactive({
      firstName: '',
      lastName: '',
      phoneNum: '',
      telegramId: '',
      address: '',
      password: '',
      confirmPassword: ''
    })

    const handleSubmit = async () => {
      if (form.password !== form.confirmPassword) {
        alert('Пароли не совпадают')
        return
      }

      try {
        await store.dispatch('register', {
          firstName: form.firstName,
          lastName: form.lastName,
          phoneNum: form.phoneNum,
          telegramId: form.telegramId,
          address: form.address,
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

.register {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.register-container {
  background: #fff;
  border: 1.5px solid var(--color-olive);
  border-radius: 2.2rem;
  padding: 3.2rem 2.8rem 2.5rem 2.8rem;
  max-width: 480px;
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

.btn-register {
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

.btn-register:hover {
  background: var(--color-light-pink);
  transform: translateY(-2px);
}

.login-link {
  text-align: center;
  color: #a89c91;
  font-family: 'Lack', Arial, sans-serif;
  margin-top: 1rem;
  font-size: 1rem;
}

.login-link a {
  color: var(--color-pink);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.login-link a:hover {
  color: var(--color-brown);
  text-decoration: underline;
}
</style> 