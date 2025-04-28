
# Treefy - Generador de Estructura de Carpetas

Este proyecto proporciona una herramienta web que permite generar y visualizar la estructura de carpetas de un proyecto de manera ordenada y estética, ideal para incluirla en un archivo README o documentación de tu repositorio.

## Características principales

- Generación de la estructura de carpetas de un proyecto a partir de una carpeta seleccionada.
- Visualización de la estructura de carpetas en un formato organizado y fácil de leer.
- Copiar la estructura generada al portapapeles.
- Limpiar la estructura generada para generar una nueva.
- Interfaz de usuario simple y clara con soporte para múltiples archivos.

## Tecnologías utilizadas

- **Frontend:** HTML, CSS, JavaScript
- **Iconos:** Personalización mediante un archivo de iconos (opcional)
- **Estilo visual:** Usando un diseño básico con soporte para íconos de carpetas y archivos.

## Prerrequisitos

- Un navegador web moderno (Google Chrome, Firefox, Safari, etc.)

## Instalación

### Paso 1: Clonar el repositorio
```bash
git clone https://github.com/Fabo2303/treefy.git
cd treefy
```

### Paso 2: Abrir el archivo `index.html` en tu navegador
- No es necesario instalar nada adicional, ya que este es un proyecto completamente estático que puede ejecutarse localmente abriendo el archivo `index.html` en tu navegador.

## Uso

### Subir un proyecto
- Haz clic en "📁 Elegir carpeta" para seleccionar la carpeta de la que quieres generar la estructura.

### Generar la estructura
- Haz clic en el botón "Generar" para crear la estructura de carpetas.

### Copiar la estructura
- Haz clic en el botón "Copiar" para copiar la estructura generada al portapapeles.

### Limpiar la estructura
- Haz clic en el botón "Limpiar" para eliminar la estructura generada y dejar el espacio listo para otra operación.

## Estructura del proyecto

```
Treefy/
├── 📜 icons.js
├── 🌐 index.html
├── 📝 README.md
├── 📜 script.js
└── 🎨 styles.css
```

## Consideraciones

### 1. Limitaciones Técnicas
- La selección de carpetas se realiza utilizando el selector de archivos de HTML5, por lo que el navegador debe soportar la funcionalidad `webkitdirectory` para seleccionar directorios.
  
- **Tamaño de archivos**:
  - El navegador podría tener limitaciones de tamaño para manejar grandes cantidades de archivos a la vez.

### 2. Personalización
- Los íconos utilizados en la estructura pueden ser personalizados mediante el archivo `icons.js`. Se pueden agregar o modificar íconos para diferentes tipos de archivos o carpetas.
