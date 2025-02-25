// Efeito de parallax na seção de fundo
window.addEventListener('scroll', function () {
  const backgroundSection = document.querySelector('.background-section');
  const scrollPosition = window.scrollY;

  // Ajusta a posição do fundo com base no scroll
  backgroundSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

/* projetos */

// Adiciona um evento de clique para os links dos projetos
document.querySelectorAll('.projetos-link').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault(); // Evita o comportamento padrão do link
      const projectTitle = this.closest('.projetos-card').querySelector('h3').textContent;
      alert(`Você clicou no projeto: ${projectTitle}`);
      // Você pode substituir o alert por um modal ou lightbox.
  });
});