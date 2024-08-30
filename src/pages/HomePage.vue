<template>
  <div class="homepage">
    <!-- Header -->
    <div class="header-container">
      <SiteHeader />
    </div>

    <!-- Banner and Products Container -->
    <div class="banner-products-container">
      <!-- Banner -->
      <div class="banner-container">
        <Banner />
      </div>

      <!-- Products -->
      <div class="product-cards-container">
        <div class="row">
          <div
            v-for="product in products"
            :key="product.id"
            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
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

.banner-products-container {
  width: 100%;
  position: relative;
}

.banner-container {
  width: 100%;
  max-width: 1600px; /* 确保 Banner 的最大宽度 */
  margin: 0 auto; /* 中心对齐 */
}

.product-cards-container {
  position: relative;
  width: 100%;
  max-width: 1600px; /* 确保产品卡片容器的宽度与 Banner 一致 */
  margin: -300px auto -150px auto; /* 使用负 margin 将卡片提升到 Banner 上方 */
  z-index: 1; /* 确保卡片在 Banner 上方 */
}

.footer-container {
  width: 100%;
  margin-top: 300px; /* 确保 Footer 不会紧贴卡片 */
}
</style>
