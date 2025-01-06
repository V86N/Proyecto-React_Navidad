# Airsoft Elite - Tienda de Airsoft

## Descripción

**Airsoft Elite** es una tienda en línea para la venta de armas y accesorios de airsoft. Está diseñada para ofrecer una experiencia de usuario fluida y moderna, utilizando tecnologías como React y Vite para el desarrollo frontend, Bootstrap para el diseño responsivo, y una base de datos MySQL para el almacenamiento de datos.

---

## Características Principales

- **Frontend desarrollado con React y Vite**: Proporciona una estructura modular y un desarrollo rápido.
- **Estilo responsivo con Bootstrap**: Diseño adaptable para todo tipo de dispositivos.
- **Gestión de estado global con Context API y Reducers**: Manejo eficiente del estado de productos y usuarios.
- **Autenticación y registro de usuarios**: Permite iniciar sesión, registrarse y mantener sesiones activas mediante tokens almacenados en el almacenamiento local.
- **Carrito de compras**: Añade productos al carrito y permite gestionar el pedido antes de realizar la compra.
- **Interfaz de gestión de productos**: Visualización y selección de productos desde una base de datos MySQL.

---

## Tecnologías Utilizadas

- **Frontend**:
  - React 18
  - Vite
  - React Router DOM
  - Bootstrap 5
- **Backend**:
  - Node.js con Express.js
  - Base de datos MySQL
- **Estado Global**:
  - Context API
  - Reducers
- **HTTP Requests**:
  - Axios

---



## Estructura del Proyecto

```
src/
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Home/
│   ├── Products/
│   ├── Register/
│   ├── Login/
│   ├── Profile/
│   ├── Cart/
├── context/
│   ├── ProductContext/
│   ├── UserContext/
├── assets/
├── styles/
├── App.css
├── App.jsx
├── main.jsx
```

---

## Funcionalidades

1. **Autenticación de Usuarios**:

   - Registro e inicio de sesión.
   - Almacenamiento seguro del token en `localStorage`.
   - Recuperación de información del usuario.

2. **Gestión de Productos**:

   - Visualización de productos desde la base de datos.
   - Añadir productos al carrito.
   - Limpieza del carrito.

3. **Carrito de Compras**:

   - Manejo del carrito en tiempo real con Reducers y Context API.

4. **Diseño Moderno**:

   - Uso de Bootstrap para ofrecer un diseño responsivo y profesional.

---

## Scripts Disponibles

- `npm run dev`: Inicia el entorno de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Previsualiza la aplicación después de compilarla.

---



## Licencia

Este proyecto está bajo la licencia MIT.

---

## Autor

**Nombre del Autor** - Airsoft Elite - 2024

Víctor Navarro

