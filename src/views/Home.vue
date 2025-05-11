<template>
  <div class="home">
    <div class="container">
      <h1>Добро пожаловать в Flower Shop</h1>
      <div class="welcome-message">
        <p>Мы рады видеть вас, {{ currentUser?.name }}!</p>
        <p>В нашем магазине вы найдете самые красивые цветы для любого случая.</p>
      </div>
      <div class="featured-products">
        <h2>Популярные букеты</h2>
        <div class="products-grid">
          <div class="product-card" v-for="i in 3" :key="i">
            <div class="product-image placeholder"></div>
            <h3>Букет "Весеннее настроение"</h3>
            <p class="price">2 500 ₽</p>
            <button class="btn-add-to-cart">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  setup() {
    const store = useStore()
    const currentUser = computed(() => store.getters.currentUser)

    return {
      currentUser
    }
  }
}
</script>

<style scoped>
.home {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

h1 {
  color: #42b983;
  text-align: center;
  margin-bottom: 2rem;
}

.welcome-message {
  text-align: center;
  margin-bottom: 3rem;
}

.welcome-message p {
  color: #2c3e50;
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

.featured-products {
  margin-top: 3rem;
}

h2 {
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 200px;
  background-color: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.placeholder {
  background: linear-gradient(45deg, #f8f9fa 25%, #e9ecef 25%, #e9ecef 50%, #f8f9fa 50%, #f8f9fa 75%, #e9ecef 75%, #e9ecef 100%);
  background-size: 20px 20px;
}

h3 {
  color: #2c3e50;
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.price {
  color: #42b983;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.btn-add-to-cart {
  width: 100%;
  padding: 0.75rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-add-to-cart:hover {
  background-color: #3aa876;
}
</style> 