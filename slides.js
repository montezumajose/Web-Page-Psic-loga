let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

  // Ajustar el índice en caso de que exceda los límites
    if (index >= totalSlides) {
    currentIndex = 0; // Regresa al inicio
    } else if (index < 0) {
    currentIndex = totalSlides - 1; // Va al final
    } else {
    currentIndex = index;
    }

  // Mover el contenedor al slide correspondiente
  const offset = -currentIndex * 100; // Calcula el desplazamiento
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Inicializa el slider en la primera imagen
showSlide(currentIndex);
setInterval(() => {
    nextSlide();
  }, 5000); // Cambia de slide cada 5 segundos