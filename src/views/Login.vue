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
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px);
  background: linear-gradient(135deg, var(--rp-base) 60%, var(--rp-pine) 100%);
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

.login-container {
  background: var(--rp-surface);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(60, 34, 90, 0.18);
  width: 100%;
  max-width: 420px;
  z-index: 1;
  position: relative;
  border: 2px solid var(--rp-pine);
}

h2 {
  text-align: center;
  color: var(--rp-pine);
  margin-bottom: 2rem;
  font-family: 'Pacifico', cursive;
  font-size: 2.2rem;
  letter-spacing: 2px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--rp-foam);
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1.5px solid var(--rp-muted);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--rp-overlay);
  color: var(--rp-text);
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: var(--rp-pine);
  background: var(--rp-surface);
}

.btn-login {
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(90deg, var(--rp-pine), var(--rp-foam));
  color: var(--rp-base);
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  margin-top: 0.5rem;
  box-shadow: 0 2px 8px rgba(62, 143, 176, 0.12);
}

.btn-login:hover {
  background: linear-gradient(90deg, var(--rp-foam), var(--rp-pine));
  color: var(--rp-text);
}

.register-link {
  text-align: center;
  margin-top: 1rem;
  color: var(--rp-subtle);
}

.register-link a {
  color: var(--rp-pine);
  text-decoration: none;
  font-weight: 500;
}

.register-link a:hover {
  text-decoration: underline;
  color: var(--rp-foam);
}
</style> 