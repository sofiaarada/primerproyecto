

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


const goTopBtn = document.createElement('button');
goTopBtn.textContent = '↑';
goTopBtn.id = 'goTopBtn';
Object.assign(goTopBtn.style, {
  position: 'fixed',
  bottom: '40px',
  right: '40px',
  padding: '15px 20px',
  fontSize: '2rem',
  borderRadius: '50%',
  background: 'linear-gradient(120deg, #e5acfb 0%, #5b055a 100%)',
  color: '#fff',
  border: 'none',
  boxShadow: '0 4px 16px rgba(91,5,90,0.15)',
  cursor: 'pointer',
  zIndex: 2000,
  display: 'none',
  transition: 'opacity 0.3s'
});
document.body.appendChild(goTopBtn);

window.addEventListener('scroll', () => {
  goTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
goTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    let valid = true;
    let mensaje = '';
    const nombre = form.querySelector('input[name="nombre"]');
    const correo = form.querySelector('input[name="correo"]');
    if (!nombre.value.trim()) {
      valid = false;
      mensaje += 'Por favor ingresa tu nombre.\n';
    }
    if (!correo.value.trim() || !/\S+@\S+\.\S+/.test(correo.value)) {
      valid = false;
      mensaje += 'Por favor ingresa un correo válido.\n';
    }
    if (!valid) {
      e.preventDefault();
      alert(mensaje);
    }
  });
}


window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    alert('¡Bienvenido/a a mi portafolio! 😊\nExplora y conoce más sobre mí.');
  }, 600);
});


const animElements = document.querySelectorAll('section, article, .portafolio, .referencia-card');
const animateOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  animElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.style.transition = 'opacity 1s, transform 1s';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
    }
  });
};
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);


function animateCounter(selector, end, duration = 2000) {
  const el = document.querySelector(selector);
  if (!el) return;
  let start = 0;
  const step = Math.ceil(end / (duration / 30));
  const counter = setInterval(() => {
    start += step;
    if (start >= end) {
      el.textContent = end;
      clearInterval(counter);
    } else {
      el.textContent = start;
    }
  }, 30);
}

function animarHabilidades() {
  const seccion = document.getElementById('section-habilidades');
  if (!seccion) return;
  const seccionTop = seccion.getBoundingClientRect().top;
  const trigger = window.innerHeight * 0.85;
  if (seccionTop < trigger) {
    document.querySelectorAll('.progreso').forEach(barra => {
      const valor = barra.getAttribute('data-valor');
      barra.style.width = valor + '%';
    });
    window.removeEventListener('scroll', animarHabilidades);
  }
}
window.addEventListener('scroll', animarHabilidades);
window.addEventListener('DOMContentLoaded', animarHabilidades);