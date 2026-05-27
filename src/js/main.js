// Destaca o link ativo da navegação conforme a página atual
(function () {
  const links = document.querySelectorAll('.nav a');
  const current = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === current) {
      link.style.color = 'var(--color-primary)';
    }
  });
})();
