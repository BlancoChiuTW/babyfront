export const products = [
  {
    id: 1,
    title: "日曆三眼鋼帶石英男士商務錶(黑)",
    imageSrc:
      "https://cbu01.alicdn.com/img/ibank/O1CN01bJlfdH2NBFW1jK4vv_!!4033099924-0-cib.jpg", // 外部圖片
    imageAlt: "images1",
    adText: "精選商品",
    linkUrl:
      "https://detail.1688.com/offer/602917836603.html?spm=a2615.2177701.autotrace-_t_15149603182512_1_0_5_1515029727133.11.613147e7gTiFMA",
  },
  {
    id: 2,
    title: "日曆三眼鋼帶石英男士商務錶(白)",
    imageSrc:
      "	https://cbu01.alicdn.com/img/ibank/O1CN01BxdNtZ2NBFW5btUer_!!4033099924-0-cib.jpg", // 外部圖片
    imageAlt: "images1",
    adText: "精選商品",
    linkUrl:
      "https://detail.1688.com/offer/602917836603.html?spm=a2615.2177701.autotrace-_t_15149603182512_1_0_5_1515029727133.11.613147e7gTiFMA",
  },
  {
    id: 3,
    title: "日曆三眼鋼帶石英男士休閒錶 ",
    imageSrc: "https://cbu01.alicdn.com/img/ibank/O1CN01lwT3nI2NBFHaC13qq_!!4033099924-0-cib.jpg",
    imageAlt: "images1",
    adText: "精選商品",
    linkUrl: "#",
  },
  {
    id: 4,
    title: "個人電腦優惠商品",
    imageSrc: "https://cbu01.alicdn.com/img/ibank/O1CN01QLoIZW2NBFXPt0Hko_!!4033099924-0-cib.jpg",
    imageAlt: "images1",
    adText: "精選商品",
    linkUrl: "#",
  },
  
];

export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 100); // 模拟1秒的网络延迟
  });
}
