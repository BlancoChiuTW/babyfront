<template>
    <div class="page">
      <!-- Header -->
      <div class="header-container">
        <SiteHeader />
      </div>
  
      <!-- Content -->
      <div class="content-container">
        <h1>幫助中心</h1>
        <p>這裡是您的幫助頁面的內容。您可以在這裡提供常見問題解答或其他有助於用戶的資訊。</p>
  
        <h2>常見問題</h2>
  
        <h3>Q：如果收到的商品有瑕疵怎麼辦？</h3>
        <p>
          A： 若您收到的商品有任何瑕疵，請您在收到商品後的7天內聯絡我們的客服團隊，並提供商品瑕疵的照片。我們將進行確認並為您提供適當的解決方案，例如更換新商品或退款。
        </p>
  
        <h3>Q：我想退換貨，如果收到的商品想退換怎麼辦？</h3>
        <p>
          A： 如果您不滿意所購買的商品或想進行退換貨，請在收到商品後的14天內聯絡我們的客服團隊。請確保商品未使用、未洗滌，並保持原始包裝完整。我們將提供退換貨的詳細流程指引。
        </p>
  
        <h3>Q：我下單的時候有貨，後來又告知沒有貨(售完)？</h3>
        <p>
          A： 我們深感抱歉給您帶來的不便。由於商品存貨數量與實際銷售速度有時會有些許落差，可能會出現這種情況。如果您所訂購的商品售完，我們的客服團隊將儘速通知您，並協助您更改訂單或進行退款。
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
  
  .content-container h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 20px 0 10px; /* 調整問題標題與回答間的距離 */
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
  