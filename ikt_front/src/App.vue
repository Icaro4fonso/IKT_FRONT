<template>
  <div class="app-layout">

    <header class="main-header">
      <nav class="navbar">
        <div class="logo"> <strong> <span class="material-icons">local_cafe</span>Home Coffee</strong></div>

        <div class="nav-links">
          <RouterLink to="/sales" active-class="active-link">Sales</RouterLink>
          <RouterLink to="/products" active-class="active-link">Products</RouterLink>
        </div>
      </nav>
    </header>


    <main class="main-content">
      <div class="page-container">
        <RouterView />
      </div>
    </main>


  </div>
</template>

<style>
.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  background-color: #f1edea;
}

.page-container {
  width: 100%;
  max-width: 1200px;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
}

.main-header {
  background-color: #834821;
  padding: 1rem 2rem;
  border-bottom: 1px solid #333;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: right;
  margin: 0 auto;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  padding: 8px 16px;
  border-radius: 8px;
}

.nav-links a.active-link {
  color: #834821;
  /* marrom */
  font-weight: 600;
}

.active-link {
  background-color: #f7f3ed;
}

.main-content>* {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.logo strong {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #e8e0d2;
  font-size: 1.5rem;
  ;
}

.logo .material-icons {
  font-size: 22px;
  line-height: 1;
}
</style>
