# 🧢 Gorras & Más

Proyecto de práctica desarrollado como actividad del **SENA**, enfocado en el aprendizaje de **React Hooks** y componentes de **Material UI (MUI)**.

La aplicación simula una tienda de gorras con paleta de colores en **blanco y negro**, navegación entre secciones y ejemplos interactivos de cada hook.

---

## 🛠️ Tecnologías

- **React** con **Vite**
- **Material UI (MUI)**
- **React Router DOM**

---

## ✨ Características principales

- 🧩 Práctica de los principales Hooks de React (`useState`, `useEffect`, `useMemo`, `useContext`, `useCallback`, `useRef`, `useReducer`)
- 🪝 Implementación de un **Custom Hook** (`useOnline`) para detectar conexión a internet
- 🛒 **Carrito de compras** funcional con agregar, eliminar y cálculo de total en tiempo real
- ❤️ Sección de **favoritos** con pantalla de estado vacío
- 📱 Diseño **responsivo** con menú hamburguesa en móvil
- 🎨 Estilo **blanco y negro** usando componentes de Material UI
- 🗂️ Catálogo de productos dividido por categorías
- 🔔 Notificaciones con `Snackbar` al interactuar con productos
## 📁 Estructura del proyecto
```
src/
├── features/
│   └── articles/
│       ├── components/
│       │   ├── Articles.jsx
│       │   └── Offers.jsx
│       └── hooks/
│           ├── useSta.jsx
│           ├── useEffect.jsx
│           ├── useMemo.jsx
│           ├── useCont.jsx
│           ├── useCallback.jsx
│           ├── useRef.jsx
│           ├── useReducer.jsx
│           ├── useOnline.jsx
│           └── Favorite.jsx
├── auth/
│   └── components/
│       ├── Myaccount.jsx
│       ├── Mybuys.jsx
│       └── Myfavorites.jsx
├── layout/
│   └── components/
│       ├── Header.jsx
│       ├── Footer.jsx
│       └── Content.jsx
└── shared/
    └── carrito.jsx
```

---

## 📚 Hooks practicados

| Hook | Descripción |
|---|---|
| `useState` | Contador de gorras con botones + y − |
| `useEffect` | Rotación automática de imágenes |
| `useMemo` | Cálculo optimizado del precio total |
| `useContext` | Compartir datos de usuario entre componentes |
| `useCallback` | Memorización de funciones de selección |
| `useRef` | Acceso al DOM sin re-renders |
| `useReducer` | Estado complejo con descuentos |
| Custom Hook | `useOnline` — detecta conexión a internet |

---

## 🎨 Diseño

- Paleta **blanco y negro**
- Componentes de **Material UI**: `AppBar`, `Card`, `Grid`, `Drawer`, `Popover`, `Badge`, `Chip`, `Snackbar`
- Diseño **responsivo** — se adapta a móvil y escritorio
- Menú hamburguesa en pantallas pequeñas

---

## 🛒 Carrito de compras

- Agregar y eliminar productos
- Total calculado en tiempo real
- Dropdown desde el `AppBar` con `Popover`
- Contador de items con `Badge`

---

## ▶️ Cómo correr el proyecto
```bash
npm install
npm run dev
```

---


## 👩‍💻 Datos dela Autora

| | |
|---|---|
| **Nombre** | Mariana CM|
| **Programa** | Análisis y Desarrollo de Software |
| **Institución** | SENA — Servicio Nacional de Aprendizaje |
| **Ciudad** | Medellín, Colombia 🇨🇴 |
| **Actividad** | Práctica de React Hooks y Material UI |
| **Año** | 2026 |
