<template>

  <section>
    <div class="header-row">
      <h1 class="brown-header">Top 5 Months</h1>
      <h3 class="brown-header">The five most profitable months</h3>
    </div>
    <div class="action-card">
      <div class="header">
        <h2 class="brown-header">Resume</h2>
        <button @click="fetchData">Refresh</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Period</th>
            <th>Sales</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.monthYear">
            <td>{{ getMonthName(item.month) }}</td>
            <td>{{ item.totalSalesCount }}</td>
            <td>R$ {{ item.totalProfit.toLocaleString('en-US', { minimumFractionDigits: 2 }) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '@/services/api';

const data = ref([]);
const fetchData = async () => {
  const res = await api.get('/api/sales/most-profit-month');
  data.value = res.data;
};
onMounted(fetchData);


const getMonthName = (monthNumber) => {
  if (!monthNumber) return '';
  const date = new Date(2000, monthNumber - 1, 1);
  return date.toLocaleString('en-US', { month: 'long' });
};

</script>

<style scoped>
.action-page {
  width: 100%;
  max-width: 800px;
}

.action-card {
  min-width: 700px;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  color: #834821;
  border-bottom: 1px solid #cac3c3;
  padding: 10px;
  text-align: center;
}

td {
  padding: 15px 10px;
  border-bottom: 1px solid #cac3c3;
  color: #383837;
  text-align: center;
}

.back-link {
  display: inline-block;
  padding: 8px 16px;
  background-color: #42b883;
  color: white !important;
  text-decoration: none;
  margin-bottom: 20px;
  border-radius: 4px;
  font-weight: bold;
  transition: opacity 0.3s;
}

.back-link:hover {
  opacity: 0.8;
}

button {
  background: #834821;
  color: white;
  border: 2px solid #ded9d3;
  padding: 14px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease;
  text-align: center;
}

button:hover {
  opacity: 0.8;
}

button:disabled {
  background-color: #444;
  cursor: not-allowed;
  opacity: 1;
}
</style>