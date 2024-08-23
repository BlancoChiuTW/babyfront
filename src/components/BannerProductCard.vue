<template>
    <div class="banner-product-card card">
      <div class="title-bar">
        <h5 class="card-title">{{ title }}</h5>
        <a :href="moreLink" class="card-more-text">{{ moreText }}</a>
      </div>
      <div class="scroll-container" ref="scrollContainer">
        <div class="products">
          <img v-for="(product, index) in products" :key="index" :src="product.src" :alt="product.alt" class="product-image" />
        </div>
      </div>
      <button @click="scrollPrev" class="scroll-button prev">‹</button>
      <button @click="scrollNext" class="scroll-button next">›</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BannerProductCard',
    props: {
      title: {
        type: String,
        required: true
      },
      moreText: {
        type: String,
        required: true
      },
      moreLink: {
        type: String,
        required: true
      },
      products: {
        type: Array,
        required: true
      }
    },
    methods: {
      scrollNext() {
        const container = this.$refs.scrollContainer;
        if (container) {
          const itemWidth = container.querySelector('.product-image').offsetWidth;
          container.scrollLeft += itemWidth * 6; // 每次移動六張圖片的寬度
        }
      },
      scrollPrev() {
        const container = this.$refs.scrollContainer;
        if (container) {
          const itemWidth = container.querySelector('.product-image').offsetWidth;
          container.scrollLeft -= itemWidth * 6; // 每次移動六張圖片的寬度
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .banner-product-card {
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: none; 
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }
  
  .title-bar {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .card-title {
    font-size: 1.35rem;
    font-weight: bold;
  }
  
  .card-more-text {
    font-size: 1rem;
    color: #007bff;
    text-decoration: none;
  }
  
  .card-more-text:hover {
    text-decoration: none;
    color: #ff9900;
  }
  
  .scroll-container {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
  }
  
  .scroll-container::-webkit-scrollbar {
    height: 8px;
  }
  
  .scroll-container::-webkit-scrollbar-track {
    background: #e3e6e6;
  }
  
  .scroll-container::-webkit-scrollbar-thumb {
    background-color: #ff9900;
    border-radius: 10px;
  }
  
  .scroll-container::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  
  .products {
    display: flex;
    flex-wrap: nowrap;
  }
  
  .product-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-left: 10px;
  }
  
  .scroll-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color:white;
    color: #ff9900;
    z-index: 2;
    padding: 10px;
    border: none;
    background-color: #232f3e;
    transition: background-color 0.3s ease;
    font-size: 2rem;
  }
  

  
  .scroll-button.prev {
    left: 0; /* 恢復按鈕位置 */
  }
  
  .scroll-button.next {
    right: 0; /* 恢復按鈕位置 */
  }
  </style>
  