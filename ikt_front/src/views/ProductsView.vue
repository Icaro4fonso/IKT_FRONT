<template>
  <div>
    <h1 class="brown-header">Product Insights</h1>

    <section>
      <div class="header-row">
        <h3 class="brown-header">Top 3 Best Selling Coffees</h3>
        <button class="refresh-button" @click="fetchTopProducts" :disabled="isLoading">
          {{ isLoading ? 'Loading...' : 'Refresh Ranking' }}
        </button>
      </div>

      <div v-if="topProducts.length" class="ranking-cards">
        <div v-for="(product, index) in topProducts" :key="product.productName" :class="['product-card',
          {
            'first-place': index === 0,
            'second-place': index === 1,
            'third-place': index === 2
          }]">
          <div class="rank-badge">#{{ index + 1 }}</div>
          <h4>{{ product.productName }}</h4>
          <div class="stats">
            <p><strong>Quantity:</strong> {{ product.totalQuantity }} units</p>
            <p><strong>Revenue:</strong> R$ {{ product.totalRevenue.toLocaleString('en-US', {
              minimumFractionDigits: 2
            }) }}</p>
          </div>
        </div>
      </div>

      <p v-else-if="!isLoading" class="empty-msg">
        No product data found. Try uploading a sales file first.
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '@/services/api'

const topProducts = ref([]);
const isLoading = ref(false);

const fetchTopProducts = async () => {
  isLoading.value = true;

  try 
  {

    const response = await api.get('/api/products/most-ordered')
    topProducts.value = response.data;
  } 
  catch (error) {
    console.error("Error fetching top products:", error);
  } 
  finally {
    isLoading.value = false;
  }
};

// Fetch data automatically when the component mounts
onMounted(() => {
  fetchTopProducts();
});
</script>

<style scoped>
.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.ranking-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  background: white;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.first-place {
  border: 2px solid #ffd700;
  background: #fffdf0;
}

.first-place .rank-badge {
  background: #ffd700;
  color: #000;
}

.second-place {
  border: 2px solid #c0c0c0;
  background: #f5f5f5;
}

.second-place .rank-badge {
  background: #c0c0c0;
  color: #000;
}

.third-place {
  border: 2px solid #cd7f32;
  background: #fff8dc;
}

.third-place .rank-badge {
  background: #cd7f32;
  color: #fff;
}


.rank-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.stats p {
  margin: 5px 0;
  color: #555;
}

.empty-msg {
  text-align: center;
  color: #666;
  margin-top: 40px;
  font-style: italic;
}

.refresh-button {
  background: #834821;
  color: white;
  border: 2px solid #ded9d3;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease;
  margin: 10px;
}

.refresh-button:disabled {
  background-color: #a8d5c2;
}
</style>