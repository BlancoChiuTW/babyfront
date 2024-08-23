<template>
  <div class="banner-container">
    <div class="banner-slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="banner-slide"
      >
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
    <button class="banner-control prev" @click="prevSlide">‹</button>
    <button class="banner-control next" @click="nextSlide">›</button>
    <div class="banner-indicators">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="['indicator', { active: currentIndex === index }]"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageBanner',
  data() {
    return {
      images: [
        { src: '/banner1.jpg', alt: 'Banner 1' },
        { src: '/banner2.jpg', alt: 'Banner 2' },
        { src: '/banner3.jpg', alt: 'Banner 3' },
        { src: '/banner4.jpg', alt: 'Banner 4' },
        { src: '/banner5.jpg', alt: 'Banner 5' },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.banner-container {
  position: relative;
  width: 1500px;
  height: 600px;
  overflow: hidden;
  margin: auto; /* 居中对齐 */
}

.banner-slider {
  display: flex;
  transition: transform 0.25s ease-in-out; /* 调整滑动速度 */
  height: 100%; /* 保持slider和容器高度一致 */
}

.banner-slide {
  min-width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片比例并覆盖容器 */
}

.banner-control {
  position: absolute;
  top: 50%;
  transform: translateY(-200%);
  background: transparent; /* 透明背景 */
  color: #232f3e;
  border: none;
  padding: 20px; /* 增加按钮的内边距 */
  cursor: pointer;
  z-index: 10;
  font-size: 3.5rem; /* 增大按钮中的图标大小 */
}

.banner-control.prev {
  left: 20px; /* 调整距离左侧的间距 */
}

.banner-control.next {
  right: 20px; /* 调整距离右侧的间距 */
}

.banner-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.indicator {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.indicator.active {
  background-color: #fff;
}
</style>
