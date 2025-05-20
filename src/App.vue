<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <div class="logo-block">
          <span class="logo-img">🌼</span>
          <span class="logo-text">FLOWERS SHOP</span>
        </div>
        <div class="nav-links">
          <router-link to="/login" class="nav-btn" :class="{ active: $route.path === '/login' }">Вход</router-link>
          <router-link to="/register" class="nav-link" :class="{ active: $route.path === '/register' }">Регистрация</router-link>
        </div>
      </div>
    </nav>
    <div class="flowers-bg"></div>
    <router-view/>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup() {
    const store = useStore()
    const isAuthenticated = computed(() => store.getters.isAuthenticated)

    const logout = () => {
      store.dispatch('logout')
    }

    onMounted(() => {
      store.dispatch('theme/initTheme')
    })

    return {
      isAuthenticated,
      logout
    }
  }
}
</script>

<style>
@import '@/assets/styles/variables.css';
@import '@/assets/styles/fonts.css';

body, #app {
  background: #fff;
  font-family: 'Lack', Arial, sans-serif;
  color: var(--color-brown);
  min-height: 100vh;
}

.flowers-bg {
  position: fixed;
  left: 0; right: 0; top: 0; bottom: 0;
  z-index: 0;
  pointer-events: none;
  background: url('https://pngimg.com/d/flower_PNG1006.png') repeat 0 0/200px auto,
              url('https://pngimg.com/d/flower_PNG1007.png') repeat 100px 100px/180px auto;
  opacity: 0.06;
  transition: opacity 0.3s ease;
}

html[data-theme="light"] .flowers-bg {
  opacity: 0.1;
}

.navbar {
  background: #fff;
  border-bottom: 1px solid var(--color-olive);
  height: 80px;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 80px;
}

.logo-block {
  display: flex;
  align-items: center;
  gap: 18px;
}
.logo-img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1.5px solid var(--color-olive);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
}
.logo-text {
  font-family: 'Calypso', cursive;
  font-size: 1.45rem;
  color: var(--color-brown);
  letter-spacing: 1.5px;
  margin-left: 2px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 18px;
}

.nav-btn {
  background: var(--color-light-pink);
  color: var(--color-pink);
  border-radius: 2rem;
  padding: 0.5rem 2.2rem;
  font-family: 'Lack', Arial, sans-serif;
  font-size: 1.08rem;
  border: none;
  outline: none;
  text-decoration: none;
  font-weight: 400;
  transition: background 0.2s, color 0.2s;
  margin-right: 8px;
  cursor: pointer;
  box-shadow: none;
}
.nav-btn.active,
.nav-btn.router-link-exact-active {
  background: var(--color-pink);
  color: #fff;
}

.nav-link {
  background: none;
  color: var(--color-brown);
  border-radius: 2rem;
  padding: 0.5rem 1.2rem;
  font-family: 'Lack', Arial, sans-serif;
  font-size: 1.08rem;
  border: none;
  outline: none;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.2s;
  cursor: pointer;
}
.nav-link.active,
.nav-link.router-link-exact-active {
  color: var(--color-pink);
}
</style> 