# NexusCRM

CRM ligero para pequeños negocios. Cada funcionalidad responde a un caso de uso real de gestión de clientes.

## Stack actual

- HTML5 semántico.
- CSS3 (Flexbox, Grid, metodología de nombres consistente).
- JavaScript — DOM, eventos, validación, renderizado dinámico.
- Git / GitHub con Conventional Commits.
- React — interfaces de usuario modulares basadas en componentes.
- Vite — entorno de desarrollo y empaquetador rápido.
- React Router — manejo de navegación y rutas de la aplicación.

> Este proyecto evoluciona sprint a sprint. El stack se irá ampliando (Node.js, Express, SQL) conforme el producto lo requiera — no se incorpora tecnología sin una necesidad real que la justifique.

## Progreso

- **Sprint 1:** Estructura del proyecto y pantalla de login (HTML semántico + accesibilidad básica).
- **Sprint 2:** Estilos del login con Flexbox, box model y diseño responsive básico.
- **Sprint 3:** Validación de formulario con JavaScript: campos obligatorios y longitud mínima de contraseña, con mensajes de error específicos.
- **Sprint 4:** Dashboard de clientes con datos simulados (mock data), renderizado dinámico desde un array de objetos.
- **Sprint 5:** Estilos del dashboard con CSS Grid responsive y badges de estado por color.
- **Sprint 6-8 (React):** migración progresiva a React — componentización (`ClientCard`), y búsqueda de clientes en tiempo real con `useState` y `.filter()`.
- **Sprint 9:** separación de `SearchBar` como componente independiente, comunicación hijo→padre mediante props de función, y estilos propios por componente.
- **Sprint 10:** migración completa a SPA con React Router — login (`LoginPage`) y dashboard (`DashboardPage`) como rutas independientes, con redirección automática tras validación exitosa.
- **Sprint 11:** Limpieza de los estilos de la plantilla de Vite, estilos propios para login, dashboard y recuperación de contraseña, y validación del formato del correo en el formulario de acceso.

## Retos técnicos y decisiones de arquitectura

### 1. Layout acoplado entre páginas (Flexbox global en `body`)

**Problema:** el login necesitaba estar centrado verticalmente en toda la pantalla, así que esa lógica de centrado (Flexbox) se aplicó directamente al selector `body`. Al crear una segunda página (el dashboard), esta heredó el mismo comportamiento de forma no deseada, rompiendo su layout.

**Solución:** se movió la responsabilidad de centrado del `body` hacia el contenedor específico de cada página (`.login-container`), dejando el `body` neutral. Cada página controla su propio layout de forma independiente.

**Principio aplicado:** bajo acoplamiento entre componentes de estilos. Una regla global no debería imponer comportamiento a páginas con necesidades de layout distintas — cada contenedor de página debe ser responsable de su propia disposición.

### 2. Nombres de clases dinámicas no coincidentes entre JS y CSS

**Problema:** al generar badges de estado dinámicamente (`badge-${cliente.estado}`), el CSS se escribió en inglés (`.badge-active`) mientras que los datos del array estaban en español (`estado: 'activo'`), generando clases que nunca coincidían y badges sin estilo aplicado.

**Solución:** se unificó la nomenclatura para que el idioma de los datos de negocio (español, por ser el idioma del usuario final) coincidiera exactamente con las clases CSS generadas dinámicamente.

**Principio aplicado:** cuando una clase CSS se genera a partir de un dato dinámico, ambos deben tratarse como una única fuente de verdad — cualquier discrepancia (idioma, mayúsculas, ortografía) rompe la conexión de forma silenciosa, sin lanzar ningún error visible.

## Cómo correr el proyecto

1. Entra a la carpeta del cliente: `cd client`
2. Instala las dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`

- La versión inicial en JS puro se conserva como referencia, la app actual está en `client/`.