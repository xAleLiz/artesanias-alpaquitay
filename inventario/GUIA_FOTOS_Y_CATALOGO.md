# Preparación de inventario y fotos — Artesanías Alpaquitay

## Antes de cargar productos
1. Completar `inventario/plantilla_inventario.csv` con **una fila por modelo/variante**. No inventar precios ni existencias.
2. Asignar un SKU único y estable, por ejemplo ALP-GOR-001.
3. Guardar las fotos en `img/` con nombres consistentes: `alp-gor-001-1.jpg`, `alp-gor-001-2.jpg`, `alp-gor-001-3.jpg`.
4. Fotos recomendadas: frontal sobre fondo neutro, detalle de textura y foto de uso/escala. Mismo encuadre y luz natural; sin filtros que alteren el color.
5. Exportar en JPG o WebP optimizado, idealmente 1200–1600 px de lado largo; conservar originales aparte.
6. Registrar composición real, tallas, colores, stock, precio y plazo de preparación. No indicar «100% alpaca» si no está verificado.

## Publicación
El catálogo visible actualmente se genera desde `productos.js`, mediante `window.ALPAQUITAY_PRODUCTS`. **La plantilla CSV no se importa automáticamente**: es el archivo maestro para preparar los datos antes de integrarlos. Las imágenes deben subirse a GitHub y vincularse en el catálogo.

## Seguridad y pedidos
GitHub Pages es estático: no permite proteger un panel administrativo con una contraseña incluida en HTML ni sincronizar inventario entre navegadores por sí solo. No guardar tokens, contraseñas ni datos de clientes en el repositorio público. El pedido se coordina por WhatsApp; no asumir que una consulta reserva existencias.

## Revisión antes del lanzamiento
- [ ] Verificar fotos, nombres, precio, moneda y stock de cada modelo
- [ ] Revisar el catálogo en Android, iPhone y computadora
- [ ] Probar búsqueda, filtros, ficha, favoritos, carrito y pedido WhatsApp
- [ ] Comprobar navegación Atrás, enlaces, accesibilidad y tiempos de carga
- [ ] Confirmar que las reseñas son auténticas y tienen autorización
- [ ] Validar políticas de envío, cambios y privacidad
