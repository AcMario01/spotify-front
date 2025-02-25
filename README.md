# Spotify Front - Práctica 2
Este proyecto es una aplicación frontend alternativa a Spotify, desarrollada como parte de la práctica final de la segunda evaluación. La aplicación permite gestionar usuarios, buscar canciones, discos y artistas, y reproducir música. Está construida utilizando tecnologías modernas como Webpack, Sass, Jest y ESM (ECMAScript Modules).

# Tecnologías utilizadas
1. Webpack
Descripción: Webpack es un empaquetador de módulos que permite gestionar y optimizar los recursos de tu aplicación (JavaScript, CSS, imágenes, etc.).

Uso en el proyecto: Se utiliza para compilar y empaquetar los archivos JavaScript y Sass en un solo archivo (bundle.js). También se configura un servidor de desarrollo con webpack-dev-server.

2. Sass
Descripción: Sass es un preprocesador de CSS que permite escribir estilos de manera más eficiente y organizada, utilizando variables, anidamiento y mixins.

Uso en el proyecto: Se utiliza para escribir los estilos de la aplicación en archivos .scss, que luego se compilan en CSS mediante Webpack.

3. Jest
Descripción: Jest es un framework de pruebas unitarias para JavaScript. Permite escribir y ejecutar pruebas de manera sencilla.

Uso en el proyecto: Se utiliza para realizar pruebas unitarias en la lógica de negocio de la aplicación, como la búsqueda de canciones y la gestión de usuarios.

4. ESM (ECMAScript Modules)
Descripción: ESM es un estándar moderno para importar y exportar módulos en JavaScript. Utiliza la sintaxis import y export.

Uso en el proyecto: Todos los módulos de la aplicación utilizan ESM, excepto el archivo de configuración de Webpack (webpack.config.js), que usa require por compatibilidad.
