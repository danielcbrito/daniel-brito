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

// script.js

const btnAbrirMenu = document.querySelector(".btn-abrir-menu");
const btnFecharMenu = document.querySelector(".btn-fechar");
const menuMobile = document.querySelector(".menu-mobile");
const overlayMenu = document.querySelector(".overlay-menu");

btnAbrirMenu.addEventListener("click", () => {
  menuMobile.classList.add("abrir-menu");
  overlayMenu.style.display = "block"; // Mostra o overlay
});

btnFecharMenu.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
  overlayMenu.style.display = "none"; // Esconde o overlay
});

overlayMenu.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
  overlayMenu.style.display = "none"; // Esconde o overlay ao clicar fora
});

const favicons = [
    "imagens/favicon1.png",
    "imagens/favicon2.png",
    "imagens/favicon3.png",
    "imagens/favicon4.png" // Adicione mais se tiver mais imagens
];

let faviconIndex = 0;
let growing = true; // Variável para controlar se está crescendo ou diminuindo

function changeFavicon() {
    const link = document.querySelector("link[rel='icon']");
    if (link) {
        link.href = favicons[faviconIndex];

        if (growing) {
            faviconIndex++;
            if (faviconIndex >= favicons.length - 1) {
                growing = false; // Chegou ao tamanho máximo, começa a diminuir
            }
        } else {
            faviconIndex--;
            if (faviconIndex <= 0) {
                growing = true; // Chegou ao tamanho mínimo, começa a crescer
            }
        }
    }
}

setInterval(changeFavicon, 200); // Troca a cada 200 milissegundos (ajuste conforme necessário)
