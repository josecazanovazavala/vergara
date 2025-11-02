// (tu código del slider u otras funciones aquí...)

const elementos = document.querySelectorAll('.animar-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } 
  });
}, {
  threshold: 0.2
});

elementos.forEach(el => observer.observe(el));
