
// Comportamiento: menú móvil, año dinámico y manejo del formulario con prefill según query param
document.addEventListener('DOMContentLoaded', ()=>{
  // Año en footer
  const y = new Date().getFullYear();
  const el = document.getElementById('year'); if(el) el.textContent = y;

  // Toggle nav
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if(toggle && navList){
    toggle.addEventListener('click', ()=>{
      const isHidden = getComputedStyle(navList).display === 'none';
      navList.style.display = isHidden ? 'flex' : 'none';
    });
  }

  // Prefill service if query param exists
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  if(service){
    const sel = document.querySelector('select[name="service"]');
    if(sel){
      sel.value = service;
    }
  }
});

function handleForm(e){
  e.preventDefault();
  const form = e.currentTarget || document.getElementById('contact-form');
  const data = new FormData(form);
  const entries = Object.fromEntries(data.entries());

  const subject = encodeURIComponent(`Solicitud - ${entries.service || 'General'}`);
  const bodyLines = [
    `Nombre: ${entries.name || ''} ${entries.lastname || ''}`,
    `Teléfono: ${entries.phone || ''}`,
    `Email: ${entries.email || ''}`,
    `Dirección: ${entries.address || ''}`,
    `Servicio: ${entries.service || ''}`,
    '',
    `Mensaje: ${entries.message || ''}`
  ];
  const body = encodeURIComponent(bodyLines.join('\n'));

  // mailto fallback to company email
  window.location.href = `mailto:Contacto@gofer.cl?subject=${subject}&body=${body}`;
  return false;
}
