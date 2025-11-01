// ========== MARKA SAATÇİLİK BLOG SAYFASI - TİCIMAX (email-list yapısına göre) ==========

document.addEventListener("DOMContentLoaded", function() {
  if (window.location.pathname.includes("/blog")) {
    document.body.classList.add("blog-page");

    // Üst başlık alanı
    const header = document.createElement("div");
    header.classList.add("blog-header");
    header.innerHTML = `
      <h1>Blog Yazılarımız</h1>
      <p>Marka Saatçilik Blog – Saat dünyasından ilham veren yazılar, trendler ve ipuçları</p>
    `;
    const main = document.querySelector(".page-content, main, .ticContainer, #formGlobal");
    if (main) main.prepend(header);

    // Blog liste kapsayıcısı (#email-list)
    const list = document.querySelector("#email-list");
    if (list) {
      const items = list.querySelectorAll("li");
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

          // İçerik
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

        // Orijinal listeyi temizle ve yeni görünümü ekle
        list.innerHTML = "";
        list.appendChild(container);
      }
    }
  }
});
