# 🚀 React | Landing Page

## 🛠️ Configuración Inicial

### 1️⃣ **Configuración del Proyecto**

#### Crear el Proyecto con Vite

Configura tu proyecto en el directorio actual utilizando Vite con el siguiente comando:

```sh
npm create vite@latest . -- --template react
```

Esto inicializará un proyecto React con Vite en el directorio actual, sin crear subcarpetas adicionales.

#### Instalar Dependencias

Instala las dependencias necesarias para tu proyecto con:

```sh
npm install
```

#### Iniciar el Servidor de Desarrollo

Ejecuta el servidor de desarrollo para visualizar tu proyecto:

```sh
npm run dev
```

Abre tu navegador y visita `http://localhost:3000` para ver tu proyecto en acción.

---

## 💻 Desarrollo de la Landing Page

![Diseño de la Landing Page](https://user-images.githubusercontent.com/33903092/131349832-76642727-2460-4d26-8a82-9c8bba8f5e31.png)

### 2️⃣ **Creación de Componentes**

#### Analizar la Estructura

Observa el diseño objetivo de la landing page (puedes usar una imagen de referencia). Tu tarea es replicar este diseño dividiéndolo en componentes reutilizables.

#### Planificar los Componentes

Haz una planificación inicial para identificar los elementos del diseño que pueden convertirse en componentes. Responde a preguntas como:

- ¿Qué elementos se repiten y pueden reutilizarse?
- ¿Cómo estructurarás el CSS para un mantenimiento más sencillo?
- ¿Qué props serán necesarias para que los componentes sean dinámicos?

#### Implementar los Componentes

1. Crea los componentes necesarios en la carpeta `src/components`.
2. Sigue las mejores prácticas de React:
   - Usa nombres descriptivos para tus componentes.
   - Asegúrate de que cada componente sea modular y reutilizable.
3. Prueba cada componente individualmente para verificar su correcto funcionamiento.

#### Ejemplo de Estructura de Componentes

```plaintext
src/
├── components/
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── Features.jsx
│   ├── Footer.jsx
```

#### Estilización

Crea una carpeta `styles` en `src` para mantener tus archivos CSS organizados:

```plaintext
src/
├── styles/
│   ├── global.css
│   ├── header.css
│   ├── heroSection.css
│   ├── features.css
│   ├── footer.css
```

Importa los estilos en cada componente según sea necesario.
