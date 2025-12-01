
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

  // Interceptar todos los formularios del sitio y mostrar mensaje "Próximamente..."
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Evitar múltiples envíos
      if (form.dataset.submitted === '1') return;
      form.dataset.submitted = '1';

      // Buscar botón submit
      const submit = form.querySelector('button[type="submit"], input[type="submit"]');
      const original = submit ? (submit.tagName === 'INPUT' ? submit.value : submit.textContent) : null;

      // Mostrar texto en el botón si existe
      if (submit) {
        if (submit.tagName === 'INPUT') submit.value = 'Próximamente...';
        else submit.textContent = 'Próximamente...';
        submit.disabled = true;
      }

      // Insertar mensaje debajo del formulario
      const msg = document.createElement('div');
      msg.className = 'mt-4 text-sm text-green-600 font-medium';
      msg.textContent = 'Próximamente...';
      form.appendChild(msg);

      // Mantener el mensaje visible un tiempo y luego resetear el formulario visualmente
      setTimeout(() => {
        if (submit) {
          if (submit.tagName === 'INPUT') submit.value = original || '';
          else submit.textContent = original || 'Enviar';
          submit.disabled = false;
        }
        form.dataset.submitted = '0';
        if (msg && msg.parentNode) msg.parentNode.removeChild(msg);
      }, 3500);
    });
  });
});

function handleForm(e){
  // Nota: esta función queda disponible si quieres usar el fallback mailto desde un handler explícito.
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

  // Si prefieres activar el mailto, descomenta la siguiente línea
  // window.location.href = `mailto:Contacto@gofer.cl?subject=${subject}&body=${body}`;
  return false;
}
