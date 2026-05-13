let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

// Função para mostrar um slide específico
function showSlide(index) {
    // Remove a classe 'active' de todos
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Lógica para o loop (voltar ao início ou ir para o fim)
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Adiciona a classe 'active' ao slide atual
    slides[currentSlide].classList.add('active');
}

// Função para os botões Próximo/Anterior
function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Carrossel Automático (muda a cada 5 segundos)
let autoPlay = setInterval(() => {
    moveSlide(1);
}, 5000);

// Para o carrossel quando o utilizador clica nos botões (opcional)
document.querySelectorAll('.prev, .next').forEach(button => {
    button.addEventListener('click', () => {
        clearInterval(autoPlay); // Para a execução automática ao interagir
        autoPlay = setInterval(() => moveSlide(1), 5000); // Reinicia o timer
    });
});