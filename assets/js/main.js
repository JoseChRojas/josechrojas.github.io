// Pequeñas funciones para UI: toggle del nav y manejo de formulario
document.addEventListener('DOMContentLoaded', ()=>{
  // año en el footer
  const y = new Date().getFullYear();
  const el = document.getElementById('year'); if(el) el.textContent = y;

  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if(toggle && navList){
    toggle.addEventListener('click', ()=>{
      const isHidden = getComputedStyle(navList).display === 'none';
      navList.style.display = isHidden ? 'flex' : 'none';
    });
  }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth'});
          // close menu on mobile
          if(window.innerWidth <= 700 && navList) navList.style.display = 'none';
        }
      }
    });
  });
});

function handleForm(e){
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);
  // Simple fallback: abrir mailto con datos (no ideal para producción)
  const name = data.get('name')||'';
  const email = data.get('email')||'';
  const message = data.get('message')||'';
  const subject = encodeURIComponent('Contacto desde landing: '+name);
  const body = encodeURIComponent(`De: ${name} <${email}>\n\n${message}`);
  window.location.href = `mailto:tu@correo.com?subject=${subject}&body=${body}`;
  return false;
}