<template>
  <div id="app">
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="logo">
          <span class="logo-flower">&#127804;</span> Flower Shop
        </router-link>
        <div class="nav-links">
          <router-link to="/login" v-if="!isAuthenticated">Войти</router-link>
          <router-link to="/register" v-if="!isAuthenticated">Регистрация</router-link>
          <a href="#" @click="logout" v-if="isAuthenticated">Выйти</a>
        </div>
      </div>
    </nav>
    <div class="flowers-bg"></div>
    <router-view/>
    <ThemeToggle />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ThemeToggle from './components/ThemeToggle.vue'

export default {
  name: 'App',
  components: {
    ThemeToggle
  },
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: var(--rp-text);
  min-height: 100vh;
  background: linear-gradient(120deg, var(--rp-base) 60%, var(--rp-rose) 100%);
  position: relative;
  transition: background 0.3s ease;
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
  background: var(--rp-surface);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 1rem 0;
  border-bottom: 2px solid var(--rp-rose);
  position: relative;
  z-index: 2;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.7rem;
  font-family: 'Pacifico', cursive;
  font-weight: bold;
  color: var(--rp-love);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 2px;
}

.logo-flower {
  font-size: 2rem;
  vertical-align: middle;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a, .nav-links .router-link-active {
  color: var(--rp-foam);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background 0.3s, color 0.3s;
  font-weight: 500;
  font-size: 1.05rem;
}

.nav-links a:hover, .nav-links .router-link-active {
  background: var(--rp-overlay);
  color: var(--rp-gold);
}
</style> 