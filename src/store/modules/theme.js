const state = {
  isDarkTheme: true
};

const mutations = {
  TOGGLE_THEME(state) {
    state.isDarkTheme = !state.isDarkTheme;
    const theme = state.isDarkTheme ? 'dark' : 'light';
    console.log('Switching theme to:', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  },
  INIT_THEME(state) {
    const savedTheme = localStorage.getItem('theme');
    console.log('Initializing theme from localStorage:', savedTheme);
    if (savedTheme) {
      state.isDarkTheme = savedTheme === 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Устанавливаем темную тему по умолчанию
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }
};

const actions = {
  toggleTheme({ commit }) {
    commit('TOGGLE_THEME');
  },
  initTheme({ commit }) {
    commit('INIT_THEME');
  }
};

const getters = {
  isDarkTheme: state => state.isDarkTheme
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}; 