<template>
    <div class="page">
      <!-- Header -->
      <div class="header-container">
        <SiteHeader />
      </div>
  
      <!-- Content -->
      <div class="content-container">
        <h1>退換貨說明</h1>
        <p>
          我們希望您在 BabyBox 的購物體驗是愉快且滿意的。如果您對所購買的商品不完全滿意，我們提供靈活的退換貨政策，讓您能夠放心購物。請仔細閱讀以下退換貨的相關說明。
        </p>
  
        <h2>退換貨政策</h2>
  
        <h3>退換貨期限</h3>
        <p>
          您可以在收到商品後的 14 天內申請退換貨。請確保商品未經使用、未經洗滌，並且保留原始包裝及所有附帶配件。
        </p>
  
        <h3>退換貨條件</h3>
        <p>
          1. 商品需保持全新且未使用的狀態。
          <br />
          2. 商品包裝需完好無損，所有標籤、說明書及附帶配件需齊全。
          <br />
          3. 任何涉及個人衛生的商品（如內衣、化妝品等），如已拆封或使用，恕不接受退換貨。
        </p>
  
        <h3>退換貨流程</h3>
        <p>
          1. 請在網站上的「我的訂單」頁面中選擇需要退換的商品，並提交退換貨申請。
          <br />
          2. 我們的客服團隊將在收到您的申請後 2 個工作日內與您聯繫，確認退換貨詳情。
          <br />
          3. 在獲得退換貨批准後，請將商品連同原始包裝寄回至我們指定的退貨地址。
          <br />
          4. 在收到並驗收退回的商品後，我們將在 7 個工作日內處理您的退換貨請求。
        </p>
  
        <h3>退款方式</h3>
        <p>
          若您選擇退款，我們將把款項退回至您原先的付款帳戶中。根據不同的支付方式，款項到賬的時間可能有所不同，通常會在 7-14 個工作日內完成。
        </p>
  
        <h3>特別說明</h3>
        <p>
          1. 商品寄回運費由客戶自行承擔。若因商品瑕疵或錯誤發貨而導致的退換貨，我們將承擔來回運費。
          <br />
          2. 如遇到任何退換貨問題，請隨時聯繫我們的客服團隊，我們將竭誠為您服務。
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
  