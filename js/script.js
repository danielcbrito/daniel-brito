document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos do menu e do botão de abrir/fechar
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const btnFechar = document.querySelector('.btn-fechar');
    const overlayMenu = document.getElementById('overlay-menu');

    // Função para abrir o menu
    btnMenu.addEventListener('click', () => {
        menuMobile.classList.add('abrir-menu');
        overlayMenu.style.display = 'block';  // Mostrar a sobreposição
    });

    // Função para fechar o menu
    btnFechar.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';  // Ocultar a sobreposição
    });

    // Fechar o menu quando clicar na sobreposição
    overlayMenu.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';  // Ocultar a sobreposição
    });
});

document.querySelector('.btn-abrir-menu').addEventListener('click', function() {
    document.getElementById('menu-mobile').classList.add('abrir-menu');
    document.getElementById('overlay-menu').style.display = 'block'; // Mostra o overlay
});

document.querySelector('.btn-fechar').addEventListener('click', function() {
    document.getElementById('menu-mobile').classList.remove('abrir-menu');
    document.getElementById('overlay-menu').style.display = 'none'; // Oculta o overlay
});

document.getElementById('overlay-menu').addEventListener('click', function() {
    document.getElementById('menu-mobile').classList.remove('abrir-menu');
    this.style.display = 'none'; // Oculta o overlay quando clicar no fundo
});


