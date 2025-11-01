// ========== MARKA SAATÇİLİK BLOG SAYFASI SCRIPTİ ==========

document.addEventListener("DOMContentLoaded", function() {
  // Sadece blog sayfasında çalışsın
  if (window.location.pathname.includes("/blog")) {
    document.body.classList.add("blog-page");

    // Sayfa üstüne başlık ekle
    const header = document.createElement("div");
    header.classList.add("blog-header");
    header.innerHTML = `
      <h1>Zamansız Saat Hikayeleri</h1>
      <p>Marka Saatçilik Blog – Stil, teknik ve zamana dair ilham veren yazılar</p>
    `;
    document.body.prepend(header);

    // Eğer blog yazıları liste halinde geldiyse, onları kartlara dönüştür
    const posts = document.querySelectorAll(".blog-item, article, .blog-post");
    if (posts.length > 0) {
      const container = document.createElement("div");
      container.classList.add("blog-container");

      posts.forEach(post => {
        const card = document.createElement("div");
        card.classList.add("blog-card");

        // Görsel bul
        const img = post.querySelector("img");
        if (img) {
          card.appendChild(img.cloneNode(true));
        }

        // İçerik alanı
        const content = document.createElement("div");
        content.classList.add("blog-content");

        const title = post.querySelector("h2, h3, .title, a");
        if (title) {
          const titleClone = title.cloneNode(true);
          if (titleClone.tagName === "A") titleClone.setAttribute("target", "_self");
          content.appendChild(titleClone);
        }

        const text = post.querySelector("p, .summary, .excerpt");
        if (text) {
          content.appendChild(text.cloneNode(true));
        }

        // Devamını oku bağlantısı ekle
        const link = post.querySelector("a");
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

      // Orijinal blog içeriğini değiştir
      const main = document.querySelector(".page-content, .blog-list, main");
      if (main) {
        main.innerHTML = "";
        main.appendChild(container);
      }
    }
  }
});
