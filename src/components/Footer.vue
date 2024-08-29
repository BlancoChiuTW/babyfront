<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-logo">
        <img src="/logo2.png" alt="寶貝網 Logo" class="logo-image">
      </div>
      <div class="footer-links">
        <div class="footer-column" v-for="(column, index) in footerColumns" :key="index">
          <h4>{{ column.title }}</h4>
          <ul>
            <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div >
        <select v-model="selectedLanguage" class="footer-language">
          <option value="zh">中文 (繁體)</option>
          <option value="en">English</option>
        </select>
      </div>
      <div class="footer-copyright">
        <p>&copy; 2024 寶貝網科技有限公司. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  data() {
    return {
      selectedLanguage: "zh",
      footerColumns: [
        {
          title: "了解我們",
          links: [
            { text: "關於寶貝網", url: "#" },
            { text: "公司文化", url: "#" },
            { text: "工作機會", url: "#" },
            { text: "新聞與媒體", url: "#" },
          ],
        },
        {
          title: "與我們聯繫",
          links: [
            { text: "客服中心", url: "#" },
            { text: "合作夥伴", url: "#" },
            { text: "市場推廣", url: "#" },
            { text: "法律聲明", url: "#" },
          ],
        },
        {
          title: "購物指南",
          links: [
            { text: "如何購買", url: "#" },
            { text: "配送方式", url: "#" },
            { text: "退換貨政策", url: "#" },
            { text: "支付方式", url: "#" },
          ],
        },
        {
          title: "其他資訊",
          links: [
            { text: "隱私政策", url: "#" },
            { text: "服務條款", url: "#" },
            { text: "FAQ", url: "#" },
            { text: "網站地圖", url: "#" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.site-footer {
  background-color: #232f3e;
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}

.footer-top {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.footer-logo {
  flex: 1;
  display: flex;
  align-items: center;
}

.footer-logo img {
  max-height: 200px;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  flex: 3;
}

.footer-column {
  flex: 1;
  margin: 0 10px;
}

.footer-column h4 {
  font-weight: bold;
  margin-bottom: 15px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li a {
  color: white;
  text-decoration: none;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}

.footer-bottom {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #3a4553;
  padding-top: 20px;
}

.footer-language  {
  background-color: #232f3e;
  color: white;
  border: 1px solid #3a4553;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.footer-copyright p {
  margin: 0;
}
.logo-image{
  width: auto;
  height: auto;
}

@media (max-width: 768px) {
 .footer-links{
  flex-direction: column;

 }
 
}
</style>
