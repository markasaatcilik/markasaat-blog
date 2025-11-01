// ========== MARKA SAATÇİLİK BLOG – TİCIMAX UYUMLU DÜZEN ==========

document.addEventListener("DOMContentLoaded", function () {
  // Sadece blog sayfasında çalışsın
  if (window.location.pathname.includes("/blog")) {
    document.body.classList.add("blog-page");

    // Üst başlık alanı
    const header = document.createElement("div");
    header.classList.add("blog-header");
    header.innerHTML = `
      <h1>Blog Yazılarımız</h1>
      <p>Marka Saatçilik Blog – Saat dünyasından ilham verici içerikler, trendler ve yenilikler</p>
    `;
    const main = document.querySelector(".page-content, main, .icerikAlan");
    if (main) main.prepend(header);

    // Yazı listesi kapsayıcısı
    const list = document.querySelector(".blogList, .blog-list, .blogicerik, .blog-items");
    if (list) {
      const items = list.querySelectorAll(".blogListItem, article, li");
      if (items.length > 0) {
        const container = document.createElement("div");
        container.classList.add("blog-container");

        items.forEach(item => {
          const card = document.createElement("div");
          card.classList.add("blog-card");

          // Görsel
          const img = item.querySelector("img");
          if (img) {
            const clonedImg = img.cloneNode(true);
            card.appendChild(clonedImg);
          }

          // İçerik kısmı
          const content = document.createElement("div");
          content.classList.add("blog-content");

          const title = item.querySelector("h2, h3, a");
          if (title) {
            const clonedTitle = title.cloneNode(true);
            clonedTitle.classList.add("blog-title");
            content.appendChild(clonedTitle);
          }

          const text = item.querySelector("p");
          if (text) {
            const clonedText = text.cloneNode(true);
            clonedText.classList.add("blog-excerpt");
            content.appendChild(clonedText);
          }

          const link = item.querySelector("a");
          if (link) {
            const readMore = document.createElement("a");
            readMore.href = link.href;
            readMore.textContent = "Devamını Oku →";
            readMore.classList.add("blog-readmore");
            content.appendChild(readMore);
          }

          card.appendChild(content);
          container.appendChild(card);
        });

        // Orijinal listeyi temizle ve yeni düzeni ekle
        list.innerHTML = "";
        list.appendChild(container);
      }
    }
  }
});
