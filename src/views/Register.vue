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
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
:root {
  --rp-base: #232136;
  --rp-surface: #2a273f;
  --rp-overlay: #393552;
  --rp-muted: #6e6a86;
  --rp-subtle: #908caa;
  --rp-text: #e0def4;
  --rp-love: #eb6f92;
  --rp-gold: #f6c177;
  --rp-rose: #ea9a97;
  --rp-pine: #3e8fb0;
  --rp-foam: #9ccfd8;
  --rp-iris: #c4a7e7;
  --rp-highlight: #ebbcba;
}
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px);
  background: linear-gradient(135deg, var(--rp-base) 60%, var(--rp-rose) 100%);
  position: relative;
  overflow: hidden;
}

.flowers-bg {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  z-index: 0;
  pointer-events: none;
  background: url('https://pngimg.com/d/flower_PNG1006.png') repeat 0 0/200px auto,
              url('https://pngimg.com/d/flower_PNG1007.png') repeat 100px 100px/180px auto;
  opacity: 0.08;
}

.register-container {
  background: var(--rp-surface);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(60, 34, 90, 0.18);
  width: 100%;
  max-width: 420px;
  z-index: 1;
  position: relative;
  border: 2px solid var(--rp-rose);
  margin: 2rem 1rem;
}

h2 {
  text-align: center;
  color: var(--rp-love);
  margin-bottom: 2rem;
  font-family: 'Pacifico', cursive;
  font-size: 2.2rem;
  letter-spacing: 2px;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group:last-of-type {
  margin-bottom: 2rem;
}

label {
  display: block;
  margin-bottom: 0.75rem;
  color: var(--rp-foam);
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.875rem;
  border: 1.5px solid var(--rp-muted);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--rp-overlay);
  color: var(--rp-text);
  transition: border-color 0.3s, background-color 0.3s;
}

input:focus {
  outline: none;
  border-color: var(--rp-love);
  background: var(--rp-surface);
}

.btn-register {
  width: 100%;
  padding: 1rem;
  background: var(--rp-love);
  color: var(--rp-base);
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
}

.btn-register:hover {
  background: var(--rp-rose);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(235, 111, 146, 0.2);
}

.login-link {
  text-align: center;
  color: var(--rp-subtle);
  margin-top: 1rem;
}

.login-link a {
  color: var(--rp-love);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.login-link a:hover {
  color: var(--rp-rose);
  text-decoration: underline;
}
</style> 