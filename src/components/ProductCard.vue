<template>
  <div class="product-card card">
    <h5 class="card-title">{{ title }}</h5>
    <img :src="imageSrc" class="card-img-top" :alt="imageAlt" />
    <div class="card-body">
      <a :href="linkUrl" class="card-ad-text">{{ adText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: "商品圖片",
    },
    adText: {
      type: String,
      required: true,
    },
    linkUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  width: 100%; /* 自适应宽度 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  border: none;
  border-radius: 12px; /* 使四个角更加圆滑 */
  overflow: hidden; /* 确保内容不会溢出圆角 */
}

.product-card .card-img-top {
  width: 300px;
  height: 300px;
  object-fit: cover; /* 讓圖片填滿框架，並裁剪超出部分 */
  border-radius: 12px 12px 0 0; /* 圓角和卡片保持一致 */
  display: block;
  margin-left: auto;
  margin-right: auto;


}

.product-card .card-body {
  margin: 10px; /* 调整内边距 */
}

.product-card .card-title {
  font-size: 1.35rem; /* 更大一点的标题字体 */
  font-weight: bold;
  margin: 20px; /* 增加标题与内容之间的间距 */
}

.product-card .card-ad-text {
  font-size: 1rem;
  color: #007bff; /* Bootstrap 蓝色 */
  text-decoration: none;
}

.product-card .card-ad-text:hover {
  text-decoration: none;
  color: #ff9900;
}
</style>
