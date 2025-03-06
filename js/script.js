// Exemplo de JavaScript para interatividade básica
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    // Aqui você pode adicionar a lógica para enviar o formulário
});

// Seleciona o ícone do menu e a lista de navegação
const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

// Adiciona um evento de clique ao ícone do menu
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active'); // Alterna a classe "active" na lista
});

// Seleciona os botões de filtro e os projetos
const filtroBtns = document.querySelectorAll('.filtro-btn');
const projetos = document.querySelectorAll('.projeto');

// Adiciona um evento de clique a cada botão de filtro
filtroBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove a classe "active" de todos os botões
        filtroBtns.forEach(b => b.classList.remove('active'));
        // Adiciona a classe "active" ao botão clicado
        btn.classList.add('active');

        // Filtra os projetos com base na categoria
        const categoria = btn.getAttribute('data-categoria');
        projetos.forEach(projeto => {
            const projetoCategoria = projeto.getAttribute('data-categoria');
            if (categoria === 'todos' || projetoCategoria === categoria) {
                projeto.style.display = 'block'; // Exibe o projeto
            } else {
                projeto.style.display = 'none'; // Oculta o projeto
            }
        });
    });
});



let currentIndex = 0;

function moverCarrossel(direction) {
    const carrossel = document.querySelector('.carrossel');
    const projetos = document.querySelectorAll('.projeto');
    const totalProjetos = projetos.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalProjetos - 1;
    } else if (currentIndex >= totalProjetos) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carrossel.style.transform = `translateX(${offset}%)`;
}



const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const form = document.getElementById('form-contato');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Mensagem enviada com sucesso!');
        form.reset();
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 100;
    let count = 0;

    const updateCounter = () => {
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});