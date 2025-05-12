<template>
  <div class="home">
    <div class="container">
      <div class="hero">
        <div class="hero-content">
          <h1>Добро пожаловать в <span class="hero-flower">&#127804;</span> Flower Shop</h1>
          <div class="welcome-message">
            <p>Мы рады видеть вас, <span class="user-name">{{ currentUser?.firstName || currentUser?.name || 'гость' }}</span>!</p>
            <p>В нашем магазине вы найдете самые красивые цветы для любого случая.</p>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://pngimg.com/d/flower_PNG1006.png" alt="flowers" />
        </div>
      </div>
      <div class="featured-products">
        <h2>Популярные букеты</h2>
        <div class="products-grid">
          <div class="product-card" v-for="(product, i) in products" :key="i">
            <div class="product-image">
              <img :src="product.img" :alt="product.name" />
            </div>
            <h3>{{ product.name }}</h3>
            <p class="price">{{ product.price }} ₽</p>
            <button class="btn-add-to-cart">В корзину</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flowers-bg"></div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  setup() {
    const store = useStore()
    const currentUser = computed(() => store.getters.currentUser)
    const products = ref([
      {
        name: 'Букет "Весеннее настроение"',
        price: 2500,
        img: 'https://pngimg.com/d/flower_bouquet_PNG10860.png'
      },
      {
        name: 'Розовый рассвет',
        price: 3200,
        img: 'https://pngimg.com/d/flower_bouquet_PNG10862.png'
      },
      {
        name: 'Летний сад',
        price: 2800,
        img: 'https://pngimg.com/d/flower_bouquet_PNG10864.png'
      }
    ])
    return {
      currentUser,
      products
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
.home {
  padding: 2rem 0 3rem 0;
  min-height: 100vh;
  position: relative;
}

.flowers-bg {
  position: fixed;
  left: 0; right: 0; top: 0; bottom: 0;
  z-index: 0;
  pointer-events: none;
  background: url('https://pngimg.com/d/flower_PNG1006.png') repeat 0 0/200px auto,
              url('https://pngimg.com/d/flower_PNG1007.png') repeat 100px 100px/180px auto;
  opacity: 0.07;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
}

.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  background: var(--rp-surface);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(60, 34, 90, 0.10);
  padding: 2rem 1.5rem;
  gap: 2rem;
}

.hero-content {
  flex: 1 1 350px;
}

.hero-image {
  flex: 0 1 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-image img {
  width: 180px;
  height: auto;
  filter: drop-shadow(0 4px 16px var(--rp-rose));
}

h1 {
  color: var(--rp-love);
  font-family: 'Pacifico', cursive;
  font-size: 2.3rem;
  margin-bottom: 1.2rem;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.hero-flower {
  font-size: 2.2rem;
}

.welcome-message {
  color: var(--rp-foam);
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}
.user-name {
  color: var(--rp-gold);
  font-weight: bold;
}

.featured-products {
  margin-top: 2.5rem;
}

h2 {
  color: var(--rp-pine);
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.product-card {
  background: var(--rp-overlay);
  border-radius: 14px;
  padding: 1.5rem 1rem 1.2rem 1rem;
  box-shadow: 0 2px 12px rgba(62, 143, 176, 0.10);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--rp-pine);
}
.product-card:hover {
  transform: translateY(-7px) scale(1.03);
  box-shadow: 0 6px 24px rgba(235, 111, 146, 0.13);
  border-color: var(--rp-love);
}
.product-image {
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  background: var(--rp-surface);
}
h3 {
  color: var(--rp-rose);
  margin: 0.5rem 0 0.2rem 0;
  font-size: 1.15rem;
  text-align: center;
}
.price {
  color: var(--rp-gold);
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0.5rem 0;
}
.btn-add-to-cart {
  width: 100%;
  padding: 0.7rem;
  background: linear-gradient(90deg, var(--rp-love), var(--rp-gold));
  color: var(--rp-base);
  border: none;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  margin-top: 0.5rem;
  box-shadow: 0 2px 8px rgba(235, 111, 146, 0.10);
}
.btn-add-to-cart:hover {
  background: linear-gradient(90deg, var(--rp-gold), var(--rp-love));
  color: var(--rp-text);
}
</style> 