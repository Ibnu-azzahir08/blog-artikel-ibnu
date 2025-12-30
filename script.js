    function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// ================= HALAMAN =================
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  document.getElementById(pageId).classList.add('active');

  // ==== RESET BLOG (HARUS DI SINI) ====
  if (pageId === 'page-blog') {
    document.querySelector('.blog-posts').classList.remove('hidden');
    document.getElementById('post-detail').classList.add('hidden');
  }
}

// ================= POST =================
function showPost() {
  document.querySelector('.blog-posts').classList.add('hidden');
  document.getElementById('post-detail').classList.remove('hidden');
}

// ================= NAVIGATION =================
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href');

    if (target === '#home') showPage('page-home');
    if (target === '#blog') showPage('page-blog');
    if (target === '#about') showPage('page-about');
    if (target === '#contact') showPage('page-contact');
  });
});