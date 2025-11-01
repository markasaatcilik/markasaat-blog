// ========== MARKA SAATÇİLİK BLOG SAYFASI - AJAX UYUMLU SÜRÜM ==========
function markaBlogInit() {
  const list = document.querySelector("#email-list");
  if (!list) return;

  const items = list.querySelectorAll("li");
  if (items.length === 0) return;

  // Blog sayfa class
  document.body.classList.add("blog-page");

  // Üst başlık
  const main = document.querySelector(".page-content, main, .ticContainer, #formGlobal");
  if (main && !document.querySelector(".blog-header")) {
    const header = document.createElement("div");
    header.classList.add("blog-header");
    header.innerHTML = `
      <h1>Blog Yazılarımız</h1>
      <p>Marka Saatçilik Blog – Saat dünyasından ilham veren yazılar, trendler ve ipuçları</p>
    `;
    main.prepend(header);
  }

  // Yeni container
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

  list.innerHTML = "";
  list.appendChild(container);
}

// Sayfa yüklendikten sonra içerik gelmesini bekle
document.addEventListener("DOMContentLoaded", () => {
  // İlk 1 saniye sonra çalıştır
  setTimeout(markaBlogInit, 1000);
  // Ekstra güvenlik: 3 saniye sonra tekrar dene
  setTimeout(markaBlogInit, 3000);
});
