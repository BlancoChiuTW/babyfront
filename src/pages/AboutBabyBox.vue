<template>
    <div class="page">
      <!-- Header -->
      <div class="header-container">
        <SiteHeader />
      </div>
  
      <!-- Content -->
      <div class="content-container">
        <h1>關於 BabyBox</h1>
        <p>
          歡迎來到
          <strong>BabyBox</strong
          >，這是一個猶如充滿驚喜的寶箱，每次打開都會發現更多寶貝。在這裡，我們精選來自全球各地的高品質商品，猶如珍貴的寶物，陪伴每一位顧客。
        </p>
  
        <h2>我們的服務</h2>
        <p>
          BabyBox
          不僅僅是一個購物平台，更是一個充滿神奇與美妙的世界。我們精心挑選每一件商品，確保每一位寶寶都能在這裡找到他們最需要的寶貝寶物。我們深知，作為顧客，您希望購買到最好的，而我們的使命就是幫助您實現這一點。
        </p>
  
        <h2>我們的成立初衷</h2>
        <p>
          BabyBox
          的背後，是一群滿懷熱情的專業人士。我們堅信，每一件商品都是我們挑選的珍寶，他們值得擁有最優質的選品。BabyBox
          的誕生，源自於我們對購網的熱愛和對選品的無盡熱情。我們希望，通過這個平台，能夠將我們的熱情和經驗傳遞給更多的顧客。
        </p>
  
        <p>
          我們誠摯邀請您探索 BabyBox
          的世界，發現更多為客戶們精心挑選的寶物，讓 BabyBox
          成為您在網購路上的好夥伴。
        </p>
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
  
  export default {
    components: {
      SiteHeader,
      SiteFooter,
    },
  };
  </script>
  
  <style scoped>
  .page {
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
    padding: 20px 0; /* 增加上下的内边距 */
  }
  
  .content-container h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .content-container h2 {
    font-size: 2rem;
    font-weight: bold;
    margin: 30px 0 15px; /* 上下的間距調整，使內容更舒適 */
  }
  
  .content-container p {
    margin-bottom: 20px;
    line-height: 1.6; /* 調整行高，讓段落更易於閱讀 */
  }
  
  .footer-container {
    width: 100%;
    margin-top: 30px;
    background-color: #ffa500; /* 与整体主题保持一致 */
    padding: 20px;
    text-align: center;
    color: #fff;
  }
  
  @media (max-width: 768px) {
    .content-container {
      width: 100%;
      padding: 0 15px; /* 增加内边距，避免内容贴边 */
    }
  
    .footer-container {
      padding: 20px 10px;
    }
  }
  </style>
  