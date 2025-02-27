const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion-header");
const menuLinks = document.querySelectorAll(".menu-link");

function changeTheme () {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);
// fim função mudar Tema do site

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

// Efeito de rolagem suave para os botões de inscrição
document.getElementById('cta-button').addEventListener('click', function() {
    document.querySelector('.cta').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('cta-button-2').addEventListener('click', function() {
    alert('Inscrição realizada com sucesso!');
});

// Efeito de luz ao passar o mouse sobre os cards
const cards = document.querySelectorAll('.benefit-card, .testimonial-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 20px rgba(255, 111, 97, 0.7)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
});
