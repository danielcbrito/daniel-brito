document.addEventListener('DOMContentLoaded', function() {
    // Menu Hamburguer
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar nos itens de navegação
    const navItems = document.querySelectorAll('.nav-links li a');
    if (navItems) {
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // Interação com Depoimentos
    const depoimentos = document.querySelectorAll('.depoimento');
    if (depoimentos) {
        depoimentos.forEach(depoimento => {
            depoimento.addEventListener('mouseover', () => {
                depoimento.style.transform = 'translateY(-10px)';
                depoimento.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.3)';
            });

            depoimento.addEventListener('mouseout', () => {
                depoimento.style.transform = 'translateY(0)';
                depoimento.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
            });
        });
    }
});

// Função para solicitar orçamento
function solicitarOrcamento() {
    alert("Obrigado pelo seu interesse! Por favor, entre em contato pelo email: contato@empresario.com");
}

// Carrossel (se necessário)
let currentIndexCarrossel = 0;

function moverCarrossel(direction) {
    const carrossel = document.querySelector('.carrossel');
    const projetos = document.querySelectorAll('.projeto');

    if (carrossel && projetos) {
        const totalProjetos = projetos.length;
        currentIndexCarrossel = (currentIndexCarrossel + direction + totalProjetos) % totalProjetos;
        const offset = -currentIndexCarrossel * 100;
        carrossel.style.transform = `translateX(${offset}%)`;
    }
}

// Função toggleMenu (se necessário)
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Script opcional para animação de hover ou interatividade
document.addEventListener('DOMContentLoaded', function() {
    const projetos = document.querySelectorAll('.projeto');

    projetos.forEach(function(projeto) {
        projeto.addEventListener('mouseover', function() {
            projeto.style.transform = 'translateY(-10px)';
            projeto.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.3)';
        });

        projeto.addEventListener('mouseout', function() {
            projeto.style.transform = 'translateY(0)';
            projeto.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
        });
    });
});
