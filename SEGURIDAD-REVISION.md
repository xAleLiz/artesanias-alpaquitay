# Revisión inicial de seguridad — Artesanías Alpaquitay

Fecha: 2026-11-22. Alcance: archivos `index.html`, `productos.js` y `COMO-ADMINISTRAR.md` en la rama de prueba `mejora-opiniones-github`. Inspección estática; no constituye prueba de penetración ni garantiza ausencia de vulnerabilidades.

## Cambios realizados en la rama de prueba
- Lectura defensiva de favoritos, carrito y opiniones desde `localStorage`: tolera JSON inválido y comprueba estructuras esperadas.
- Filtrado y límites básicos de campos del carrito antes de utilizarlos para generar HTML.
- Validación de nombre, texto y calificación de opiniones, con límites de longitud.
- Limitación de cantidad de opiniones almacenadas localmente.
- Apertura de enlaces externos con `noopener,noreferrer` (incluidos enlaces HTML sin protección previa y pedidos por WhatsApp).
- Recuperación segura si el carrito guardado contiene JSON inválido.
- Al recuperar el carrito, precio y nombre se reconstruyen desde el catálogo en vez de confiar en los datos del navegador.
- Escape HTML en el renderizado heredado del catálogo y carrito.
- Política de referencia del navegador mediante `referrer`.

## Hallazgos y pendientes
1. **Opiniones no compartidas:** las reseñas actuales viven en `localStorage` del visitante. No son públicas ni verificadas; para comentarios compartidos usando solo GitHub se requiere configurar GitHub Discussions/giscus, con cuenta GitHub para comentar. La aprobación *antes* de publicar no viene incorporada en giscus.
2. **Código HTML dinámico:** `index.html` emplea múltiples asignaciones a `innerHTML` y atributos de evento en línea. Algunas interpolaciones están escapadas, pero se requiere revisión completa de todas las fuentes y destinos antes de considerar resuelto el riesgo de XSS.
3. **Tailwind de desarrollo:** se carga `https://cdn.tailwindcss.com`; conviene generar CSS estático para producción, validando visualmente cada página y pantalla.
4. **Dependencias externas:** Font Awesome se carga desde CDN. Conviene fijar versiones y valorar SRI y una política CSP; la presencia de numerosos scripts y eventos inline exige refactor antes de una CSP estricta.
5. **Datos del navegador:** carrito, favoritos y opiniones locales son manipulables por el usuario y no deben considerarse registros de compras, inventario ni pruebas de autenticación. El precio mostrado en el carrito recuperado se toma del catálogo, pero el precio sigue siendo informativo y la tienda debe confirmar pedidos por WhatsApp.
6. **Panel administrativo:** no existe autenticación segura integrada en GitHub Pages. La administración real debe hacerse mediante permisos de GitHub; no poner tokens ni contraseñas en el HTML.
7. **Datos personales:** no almacenar datos sensibles de clientes ni medios de pago en el repositorio público. El flujo actual deriva pedidos a WhatsApp; revisar textos de consentimiento y tratamiento de datos antes de habilitar nuevas funciones.
8. **Acceso a GitHub:** activar 2FA, revisar colaboradores y aplicaciones autorizadas, y evitar publicar credenciales. Estos ajustes de cuenta no pueden verificarse ni activarse desde esta revisión.
9. **Pruebas pendientes:** comprobar carrito, idiomas, navegación, móvil, imágenes, opiniones y compra en la rama antes de integrar a `main`.

## Estado
Cambios aplicados **solo en rama de prueba**. No fusionar automáticamente a `main` sin probar. No se detectaron patrones evidentes de claves API o tokens en los dos archivos inspeccionados; esto no equivale a certificar que el repositorio entero carece de secretos.
