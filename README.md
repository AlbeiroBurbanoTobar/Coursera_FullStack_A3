# Super Tienda Cloud 9

Proyecto del curso **Diseñando páginas web con Bootstrap** - Coursera Full Stack.

---

## Módulo 3: Comportamiento Dinámico (Ubicación de Componentes)

De acuerdo a la guía práctica del Módulo 3, a continuación se detalla dónde probar los componentes construidos:

- **Menú Desplegable (Dropdown):** En la barra de navegación superior (Navbar) de **todas las páginas** (opción "Productos").
- **Tabs, Pills y Accordion:** En `index.html`, dentro de la sección "Información de Compra" ubicada abajo de los productos. Hay pestañas (pills) y dentro un componente Acordeón para las formas de pago.
- **Collapse y Multi-collapse:** En `contacto.html`, dentro de la sección de "Preguntas Frecuentes", donde se usa el componente multi-collapse para expandirlas o contraerlas todas a la vez.
- **Tooltips y Popovers:** En `index.html`, al pasar el mouse por los **títulos de las tarjetas** de producto de la sección "Nuestros Productos Estrella", aparecerán los tooltips. El popover se activa al pasar el mouse sobre la "Tablet Pro".
- **Modal y Formulario:** Hay un botón **"Suscríbete"** en la barra de navegación de **todas las páginas**. Al darle clic, abre el modal que contiene un formulario para suscripción.
- **Carousel y Controles de Velocidad:** Presente en la cabecera (banner) de `index.html`. Los controles de desplazamiento de flechas funcionan, y un script (en el archivo enlazado `scripts.js`) maneja por Javascript la velocidad configurada a 2 segundos de pausa.

---

## Módulo 2: Navegación, Tablas, Tarjetas, Media y Formularios

### Páginas del sitio

| Página | Archivo | Descripción |
| :--- | :--- | :--- |
| **Inicio** | `index.html` | Banner carousel, cards de productos con imágenes, sección de features. |
| **Productos** | `productos.html` | Tabla con scroll, iconos Open Iconic, catálogo completo. |
| **Contacto** | `contacto.html` | Formulario (email, select, checkbox, etc.), info de contacto. |

### Requisitos implementados

- Barra de navegación fija (`fixed-top`) y responsive.
- Breadcrumbs en todas las páginas.
- Formulario con campos: email, select, checkbox, text, textarea.
- Librería Open Iconic con iconos en la tabla.
- Tabla con scroll sin deformar la página.
- Cards con título, cuerpo, footer e imágenes.
- Banner/carousel en la página principal.
- Disposición prolija (márgenes, padding, flex).

### Tecnologías

- **Bootstrap 4.6**
- **jQuery 3.6**
- **Open Iconic**
- **Google Fonts** (Outfit)

### Ejecución

```bash
npm install
npm run dev
```

---

### Autor

**AlicoSoft** - Proyecto Coursera 2026
*Coursera_FullStack_A3*