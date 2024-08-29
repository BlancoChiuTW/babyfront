<template>
  <div class="homepage">
    <!-- Header -->
    <div class="header-container">
      <SiteHeader />
    </div>

    <!-- Content -->
    <div class="content-container">
      <div class="content-header">
        <Banner />
      </div>
      <div class="content-content">
        <div class="product-cards-container">
          <div
            v-for="product in products"
            :key="product.id"
            class="product-card-top"
          >
            <ProductCard
              :title="product.title"
              :imageSrc="product.imageSrc"
              :imageAlt="product.imageAlt"
              :adText="product.adText"
              :linkUrl="product.linkUrl"
            />
          </div>
        </div>
        <div class="product-cards-container">
          <div
            v-for="product in products"
            :key="product.id"
            class="product-card"
          >
            <ProductCard
              :title="product.title"
              :imageSrc="product.imageSrc"
              :imageAlt="product.imageAlt"
              :adText="product.adText"
              :linkUrl="product.linkUrl"
            />
          </div>
        </div>
        <div class="product-cards-container">
          <div
            v-for="product in products"
            :key="product.id"
            class="product-card"
          >
            <ProductCard
              :title="product.title"
              :imageSrc="product.imageSrc"
              :imageAlt="product.imageAlt"
              :adText="product.adText"
              :linkUrl="product.linkUrl"
            />
          </div>
        </div>
        <div class="product-cards-container">
          <div
            v-for="product in products"
            :key="product.id"
            class="product-card"
          >
            <ProductCard
              :title="product.title"
              :imageSrc="product.imageSrc"
              :imageAlt="product.imageAlt"
              :adText="product.adText"
              :linkUrl="product.linkUrl"
            />
          </div>
        </div>
        <div class="product-cards-container">
          <div
            v-for="product in products"
            :key="product.id"
            class="product-card"
          >
            <ProductCard
              :title="product.title"
              :imageSrc="product.imageSrc"
              :imageAlt="product.imageAlt"
              :adText="product.adText"
              :linkUrl="product.linkUrl"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer-container">
      <SiteFooter />
    </div>
  </div>
</template>

<script>
import SiteHeader from "@/components/Header.vue";
import SiteFooter from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";
import ProductCard from "@/components/ProductCard.vue";
import { fetchProducts } from "@/assets/data.js";

export default {
  name: "HomePage",
  components: {
    SiteHeader,
    SiteFooter,
    Banner,
    ProductCard,
  },
  data() {
    return {
      products: [],
      productRows: [1, 2, 3, 4], // 用来控制重复行的数量
    };
  },
  created() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      fetchProducts().then((products) => {
        this.products = products;
      });
    },
  },
};
</script>
<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e3e6e6; /* 背景颜色 */
}

.header-container {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000; /* 确保 header 在其他内容之上 */
  background-color: white; /* 确保背景颜色不会透明 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.content-container {
  display: flex;
  flex-direction: column;
  width: 80%;
  z-index: 2;
}

.content-header {
  width: 100%;
  z-index: 0;
}

.product-cards-container {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between; /* 保持卡片之间的均匀分布 */
}

.product-card-top {
  flex: 1 0 calc(100% / 4 - 20px); /* 让每个卡片占据四分之一的宽度，减去间距 */
  max-width: 100%;
  margin-right: 20px; /* 设置卡片之间的间距 */
  box-sizing: border-box;
  margin-top: -300px;
}
.product-card {
  flex: 1 0 calc(100% / 4 - 20px); /* 让每个卡片占据四分之一的宽度，减去间距 */
  max-width: 100%;
  margin-right: 20px; /* 设置卡片之间的间距 */
  box-sizing: border-box;
}
.banner_product {
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}
.footer-container {
  width: 100%;
  margin-top: 30px;
}
@media (max-width: 768px) {
  /* 隐藏 Banner 在移动设备上的显示 */
  .content-header,
  .product-card-top,
  .account-tilte {
    display: none;
  }

  /* 调整 content-container 的宽度和布局 */
  .content-container {
    width: 100%;
    padding: 0 15px; /* 增加内边距，避免内容贴边 */
  }

  /* 产品卡片在手机端变成单列显示 */
  .product-cards-container {
    flex-wrap: wrap;
    justify-content: center;
  }

  .product-card {
    flex: 1 0 100%; /* 让每个卡片占据一整行 */
    max-width: 100%;
    margin-right: 0; /* 移除右边距 */
    margin-bottom: 20px; /* 增加底部间距 */
  }

  /* BannerProductCard 在手机端全宽显示 */
  .banner_product {
    width: 100%;
    margin-top: 20px;
  }

  /* 调整标题栏的样式 */
  .title-bar {
    font-size: 1.2rem;
    text-align: center;
  }

  /* 调整 BannerProductCard 中的按钮大小和位置 */
  .scroll-button {
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
  }

  /* 调整 Footer 的样式 */
  .footer-container {
    padding: 20px 10px;
  }

  /* 调整 SiteHeader 在移动设备上的布局 */
  .header-container {
    box-shadow: none; /* 移除阴影 */
  }
}
</style>
