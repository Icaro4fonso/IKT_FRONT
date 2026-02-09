<template>

  <section>
    <div class="header-row">
      <h1 class="brown-header">Welcome to Home Coffee</h1>
      <h3 class="brown-header">What would you like to do?</h3>
    </div>

    <div class="menu-container">
      <RouterLink to="/sales/import" class="menu-card">
        <div class="icon"><span class="material-icons">upload</span></div>
        <h2>Import Records</h2>
        <p>Upload new sales spreadsheets to the system.</p>
      </RouterLink>

      <RouterLink to="/sales/top-months" class="menu-card">
        <div class="icon"><span class="material-icons">bar_chart</span></div>
        <h2>Top 5 Months</h2>
        <p>View the most profitable months based on sales.</p>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.menu-container {
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
}

.menu-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 40px;
  width: 320px;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.menu-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.material-icons {
  font-size: 80px;
  color: #834821;
}

h2 {
  color: #834821;
  margin-bottom: 10px;
}

p {
  color: #888;
  line-height: 1.5;
}
</style>