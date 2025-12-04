# Gofer Servicios SpA — Sitio Web

Bienvenido al repositorio del sitio web informativo de **Gofer Servicios SpA** — una landing moderna para los servicios de arriendo de andamios certificados y proyectos de paisajismo.

---

**Vista rápida**
- Tipo: Sitio estático HTML + Tailwind CSS + JavaScript (vanilla)
- Hosting objetivo: GitHub Pages con dominio personalizado `goferservicios.cl`
- Estado actual: plantilla Tailwind aplicada; páginas `index`, `/paisajismo/`, `/andamios/`, `/sobre/` listas; formularios muestran mensaje "Próximamente" (no envían datos).

---

**Estructura del repositorio**

- `index.html` — Página principal (hero, secciones: nosotros, servicios, políticas, contacto).
- `paisajismo/index.html` — Detalle del servicio de paisajismo.
- `andamios/index.html` — Detalle del servicio de andamios.
- `sobre/index.html` — Página "Sobre Nosotros".
- `assets/` — Imágenes, `css` y `js` (estilos y scripts compartidos).
- `CNAME` — Dominio personalizado (`goferservicios.cl`).
- `.htaccess` — Reglas útiles para Apache (redirigir `*.html` → rutas limpias). Nota: GitHub Pages ignora `.htaccess`.

---

**Qué incluye este desarrollo**

- Plantilla moderna con Tailwind (CDN) y tipografía optimizada.
- Header responsive, menú fijo con cambio de color al hacer scroll.
- Hero dividido visualmente para representar andamios/paisajismo.
- Cards de servicio con botones `Ver detalles` y `Cotizar`.
- Formularios de contacto / reserva con manejo UX (muestra "Próximamente" al enviar).
- Rutas adaptadas para GitHub Pages (`/paisajismo/`, `/andamios/`, `/sobre/`).
- `CNAME` listo para usar con `goferservicios.cl`.

---

**Estado y limitaciones actuales**

- Los formularios no envían ni almacenan información (UX: "Próximamente").
- No hay integración con CRM ni automatización de leads.
- Falta integración de analítica (GA4/Matomo) y Search Console.
- SEO avanzado (sitemap, JSON-LD local business, meta tags por página) pendiente.
- Imágenes no convertidas a WebP/AVIF ni implementado `srcset` responsivo en todos los recursos.


---

**Despliegue en GitHub Pages (resumen)**

1. Verifica que `CNAME` contiene `goferservicios.cl`.
2. En GitHub → Settings → Pages: fuente `main` y carpeta `/ (root)`.
3. En tu registrador (NIC Chile): añade registros A (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) y CNAME para `www` apuntando a `JoseChRojas.github.io`.
4. Habilita `Enforce HTTPS` cuando el certificado esté emitido.

---

**Recomendaciones rápidas (prioridad)**

- Integrar Formspree para recibir correos de formularios en minutos.
- Añadir Google Analytics (GA4) y registrar el sitio en Search Console.
- Generar `sitemap.xml` y `robots.txt`.
- Optimizar imágenes y añadir `loading="lazy"`.

---

**Licencia y restricciones de uso**

Queda terminantemente prohibida la venta, sublicencia, reproducción comercial o distribución con fines de lucro de este proyecto y/o sus contenidos (código, diseño, activos) sin autorización expresa y por escrito de los autores.

Se permite el uso y modificación interna o para despliegue de la empresa propietaria del sitio únicamente bajo los términos acordados con los autores.

**Desarrollado por:** Diego Bravo Vargas - José Chavez Rojas

---

**Contacto / Soporte**

Si necesitas que implemente alguna mejora (integración de formularios, SEO, analytics, backups o migración a Netlify/otro hosting), abre un issue en este repositorio o escribe a los autores.

Gracias por confiar en este trabajo — el sitio está preparado para avanzar a producción con las pequeñas integraciones que prefieras.

***
