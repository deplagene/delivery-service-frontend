<template>
  <button class="theme-toggle" @click="toggleTheme" :title="isDarkTheme ? 'Переключить на светлую тему' : 'Переключить на темную тему'">
    <span class="theme-icon">{{ isDarkTheme ? '🌙' : '☀️' }}</span>
  </button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'ThemeToggle',
  setup() {
    const store = useStore()
    const isDarkTheme = computed(() => store.getters['theme/isDarkTheme'])

    const toggleTheme = () => {
      store.dispatch('theme/toggleTheme')
    }

    return {
      isDarkTheme,
      toggleTheme
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  background: var(--rp-surface);
  border: 2px solid var(--rp-rose);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.theme-toggle:hover {
  transform: scale(1.1);
  background: var(--rp-overlay);
  border-color: var(--rp-love);
}

.theme-icon {
  font-size: 1.2rem;
  line-height: 1;
}
</style> 