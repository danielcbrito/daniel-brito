

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
        
    })
})

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    })
})

// Menu Mobile
document.getElementById('menuMobile').addEventListener('click', function() {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('active');
});


// Timer de contagem regressiva
function atualizarTimer() {
    const agora = new Date();
    const fimPromocao = new Date(agora.getTime() + 24 * 60 * 60 * 1000); // 24 horas a partir de agora

    function atualizar() {
        const agora = new Date();
        const diferenca = fimPromocao - agora;

        if (diferenca <= 0) {
            clearInterval(intervalo);
            document.getElementById('timer').innerHTML = "Promoção encerrada!";
            return;
        }

        const horas = Math.floor(diferenca / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor(diferenca % (1000 * 60)) / 1000;

        document.getElementById('horas').textContent = String(horas).padStart(2, '0');
        document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
        document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
    }

    const intervalo = setInterval(atualizar, 1000);
    atualizar(); // Atualiza imediatamente
}

atualizarTimer();

// Redirecionar para o formulário de inscrição ao clicar em "Mude Sua Vida Hoje!"
document.querySelector('.btn-mudar-vida').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('inscricao').scrollIntoView({ behavior: 'smooth' });
});

// Configuração do Efeito de Partículas
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});

// Efeito de Digitação (opcional)
const titul = document.querySelector('.titulo-principal');
const subtitul = document.querySelector('.subtitulo');

function typeEffect(element, text, speed) {
    let i = 0;
    element.textContent = '';
    const typing = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, speed);
}

typeEffect(titulo, 'Seu Nome', 150);
typeEffect(subtitulo, 'Especialista em Renda Extra', 100);

// Efeito de Slideshow no Fundo
const slides = document.querySelectorAll('.background-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Troca de slide a cada 5 segundos
setInterval(nextSlide, 5000);

// Efeito de Digitação no Título e Subtítulo
const titulo = document.querySelector('.titulo-principal');
const subtitulo = document.querySelector('.subtitulo');

function typeEffect(element, text, speed) {
    let i = 0;
    element.textContent = '';
    const typing = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, speed);
}

typeEffect(titulo, 'Seu Nome', 150);
typeEffect(subtitulo, 'Especialista em Renda Extra', 100);

// Efeito de Parallax no Fundo
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
});

// Efeito de animação ao rolar a página
const garantiaContent = document.querySelector('.garantia-content');
const garantiaImagem = document.querySelector('.garantia-imagem');
const selos = document.querySelectorAll('.selo');

function animarAoRolar() {
    const scrollY = window.scrollY;
    const alturaJanela = window.innerHeight;

    if (scrollY > garantiaContent.offsetTop - alturaJanela + 100) {
        garantiaContent.style.animation = 'fadeInLeft 1.5s ease-in-out forwards';
        garantiaImagem.style.animation = 'fadeInRight 1.5s ease-in-out forwards';
    }

    selos.forEach((selo, index) => {
        if (scrollY > selo.offsetTop - alturaJanela + 100) {
            selo.style.animation = `fadeInUp 1.5s ease-in-out ${index * 0.3}s forwards`;
        }
    });
}

window.addEventListener('scroll', animarAoRolar);

/* contato */

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const duvida = document.getElementById('duvida').value;

    // Exibe os dados no console (para teste)
    console.log(`Nome: ${nome}\nE-mail: ${email}\nDúvida: ${duvida}`);

    // Exibe a mensagem de sucesso
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('show');

    // Limpa o formulário após o envio
    document.getElementById('contactForm').reset();

    // Oculta a mensagem de sucesso após 3 segundos
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
});

// Função para ajustar o layout dinamicamente
function ajustarLayout() {
    const larguraTela = window.innerWidth;

    // Exemplo 1: Ajustar o tamanho do texto
    const elementosTexto = document.querySelectorAll('h1, h2, h3, p');
    elementosTexto.forEach(elemento => {
        if (larguraTela < 768) {
            elemento.style.fontSize = '90%'; // Reduz o tamanho do texto em mobile
        } else {
            elemento.style.fontSize = ''; // Volta ao tamanho original em desktop
        }
    });

    // Exemplo 2: Ajustar o layout de um container específico
    const container = document.querySelector('.container'); // Substitua pelo seu container
    if (container) {
        if (larguraTela < 768) {
            container.style.flexDirection = 'column'; // Coluna em mobile
        } else {
            container.style.flexDirection = 'row'; // Linha em desktop
        }
    }

    // Exemplo 3: Ajustar o padding de um elemento
    const header = document.querySelector('header');
    if (header) {
        if (larguraTela < 768) {
            header.style.padding = '1rem'; // Padding menor em mobile
        } else {
            header.style.padding = '2rem'; // Padding maior em desktop
        }
    }

    // Exemplo 4: Esconder/Mostrar elementos
    const elementoOpcional = document.querySelector('.opcional');
    if (elementoOpcional) {
        if (larguraTela < 768) {
            elementoOpcional.style.display = 'none'; // Esconde em mobile
        } else {
            elementoOpcional.style.display = 'block'; // Mostra em desktop
        }
    }
}

// Exemplo: Adicionar uma animação ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
});