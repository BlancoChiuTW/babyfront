<template>
  <header class="site-header">
    <div class="header-container">
      <!-- 品牌標誌 -->
      <div class="site-logo">
        <img src="/logo.png" alt="寶貝網 Logo" class="logo-image">
      </div>

      <!-- 搜尋框 -->
      <div class="search-bar">
        <select class="form-select search-select">
          <option selected>全部</option>
          <option value="1">上衣</option>
          <option value="2">下裝</option>
          <option value="3">外套</option>
          <option value="4">飾品</option>
          <option value="5">生活用品</option>
        </select>
        <input type="text" class="form-control search-input" placeholder="搜尋...">
        <button class="btn btn-search">
          <i class="fas fa-search"></i>
        </button>
      </div>

      <!-- 帳戶 & 購物車 -->
      <div class="user-actions">
        <div class="user-account">
          <a href="#" class="account-link">
            <i class="fa-solid fa-circle-user"></i>
            <span class="account-tilte">登入</span>
          </a>
        </div>
        <div class="shopping-cart">
          <a href="#" class="cart-link">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="cart-count">0</span>
          </a>
        </div>
      </div>
    </div>

    <!-- 導覽列 -->
    <nav class="navigation-bar">
      <div class="nav-container">
        <a href="#" class="nav-link">
          <i class="fas fa-bars"></i>
          全部
        </a>
        <a href="#" class="nav-link">今日優惠</a>
        <a href="#" class="nav-link">客服服務部</a>
        <a href="#" class="nav-link">禮品單</a>
        <a href="#" class="nav-link">禮品卡</a>
        <a href="#" class="nav-link">我要開店</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
};
</script>

<style scoped>
/* 顶部整体样式 */
.site-header {
  background-color: #131921;
}

/* 顶部容器 */
.header-container {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

/* 品牌標誌樣式 */
.site-logo {
  width: 10%;  /* 占据10%宽度 */
  display: flex;
  align-items: center;
}

.logo-image {
  max-width: 100%;
  height: auto;
}

/* 搜尋框樣式 */
.search-bar {
  width: 75%;  /* 占据75%宽度 */
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 100px;
  padding: 5px 10px;
  box-shadow: 10px 4px 10px rgba(0, 0, 0, 0.1);
}

.search-select {
  border-radius: 25px 0 0 25px;
  max-width: 100px;
  border: none;
  padding: 10px;
  background-color: #f5f5f5;
}

.search-input {
  flex-grow: 1;
  border: none;
  padding: 10px;
  border-radius: 0;
  background-color: #f5f5f5;
}

.search-input:focus, .search-select:focus {
  box-shadow: 0  0 10px  rgba(49, 129, 221, 0.65); /* 柔和的蓝色阴影效果 */
  outline: none;
  background-color: #fff;
}

.btn-search {
  border-radius: 0 25px 25px 0;
  padding: 10px 20px;
  background-color: #ff9900;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-search i {
  font-size: 1.2rem; /* 调整图标大小 */
}

.btn-search:hover {
  background-color: #e68a00;
}

/* 用户操作区域样式 */
.user-actions {
  width: 15%;  /* 占据15%宽度 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.account-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  margin-right: 20px;
}

.account-link i {
  margin-right: 5px;
}

.cart-link {
  color: #fff;
  position: relative;
  text-decoration: none;
}

.shopping-cart i {
  font-size: 1.5rem;
}

.cart-count {
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 0.7rem;
  background-color: #f00;
  color: #fff;
  border-radius: 50%;
  padding: 2px 5px;
}

/* 導覽列樣式 */
.navigation-bar {
  background-color: #232f3e;
}

.nav-container {
  display: flex;
  padding: 0 20px;
}

.nav-link {
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.nav-link .fa-bars {
  margin-right: 5px;
  font-size: 2rem;
}

/* 响应式设计 */
@media (max-width: 768px) { /* Mobile */
  .header-container {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 10px;
  }

  .site-logo {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }

  .search-bar {
    width: 100%;
    order: 2;
  }

  .user-actions {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
    order: 1;
  }

  .nav-container {
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }

  .nav-link {
    padding: 10px 0;
    width: 100%;
    display: block;
  }
}
@media (max-width: 768px) {
  /* 在移动端，Logo与用户操作区域并排 */
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px; /* 调整间距以适应更紧凑的布局 */
  }

  .site-logo {
    width: auto; /* 让Logo根据内容自动调整宽度 */
    display: flex;
    align-items: center;
  }

  .user-actions {
    width: 8%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .search-bar {
    width: 90%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  /* 隐藏导航栏 */
  .navigation-bar ,
  .account-tilte {
    display: none;
  }
}

</style>
