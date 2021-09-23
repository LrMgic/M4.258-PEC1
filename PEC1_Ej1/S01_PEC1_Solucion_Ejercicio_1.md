1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos)
    • ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.
        Las etiquetas semánticas sirven para organizar los documentos web, mejorando la interpretación por parte de los navegadores y aumentando la accesibilidad para sus usuarios. 
        Indican al navegador, por ejemplo, que dentro de la etiqueta <img> habrá una imagen, <strong> debe resaltar ese texto en negrita o que dentro del <body> se encuentra el <header> que es la cabecera de la página web, <nav> el menú de navegación, <main> el contenido de la página y <footer> el pie de página.

    • Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.
        - Geolocalización: Permite a los usuarios compartir su localización.
        - IndexedDB: Es una API asíncrona que permite almacenar datos dentro del navegador del usuario i hacer consultas enriquecidas.
        - requestAnimationFrame: Permite al navegador optimizar la ejecución de animaciones, haciendo que aumente la duración de la batería de los dispositivos en que se ejecuta. 

    • Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).
        CSS3 incorpora el Viewport units (vh y vw), el qual enlaza el tamaño de los elementos con el ancho o alto de las pantallas de visualización. Utilizando un {height: 100vh} equivaldría al 100% del alto de la pantalla y {height: 1vh} el 1%

    • Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).
        - TypeScript es un lenguaje de programación libre.
        - Definir si una variable es pública o privada.
        - Definir el tipo de las variables usadas, tanto como variable básica (Boolean, Number, String, Any, Array, Tuple, Void, Null, Undefined) o crear clases y declarar objetos de estas clases.
        - Permite utilizar el patrón de diseño Decorator, que sirve para añadir funcionalidad a un objeto de forma dinámica.
        - Simplifica el uso de dependencias respecto a lenguajes como ES6.


2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)
    • Cita al menos 2 de estos preprocesadores.
        - SASS
        - LESS
        - Stylus
        - PostCSS

    • Cita al menos 4 ventajas que ofrecen estos preprocesadores.
        - Generar CSS a partir de la syntax (en-US) única del preprocesador.
        - Crear variables: Asignar un nombre a un color para aplicarlo en varios elementos. 
        - Selectores anidados.
        - Namespaces: para agrupar contextos de estilos
        - Mixins: para estilos aplicables a varios elementos

    • Explica brevemente en qué consisten los sourcemaps.
        Le indican al navegador dónde están los archivos Sass originales utilizados para generar los archivos CSS

    • Explica qué es un transpilador.
        Es un compilador que traduce de un lenguaje fuente a otra fuente. Partiendo de uno o varios archivos de un formato que la web no puede interpretar, el transpilador traduce y genera los documentos necesarios para adaptarlo a algún o todos los navegadores. Esto permite a los programadores ahorrar mucho tiempo sobre todo cuando se trata de modificar un elemento que se aplica en varios archivos a la vez.



3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).
    • Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.
        - Sistemas de gestión de versiones: Git, CVS y Mercurial.
        - Herramientas de gestión de módulos: Npm, RequireJS.

    • Cita y explica al menos 3 comandos de Git.
        $ git init: Crea un nuevo repositorio local GIT.
        $ git push: Envía confirmaciones a la rama maestra/principal del repositorio remoto.
        $ git pull: Fusiona todos los cambios del repositorio local con el directorio de trabajo local.


    • Cita y explica brevemente las características más definitorias de WebPack.
        Webpack se define como un empaquetador de módulos:
        - Gestiona dependencias: listar todas las tareas necesarias para llevar a cabo el proyecto y definir la dependencia entre ellas
        - Ejecuta tareas: Ejecuta módulos instalados.
        - Convierte formatos: Partiendo de un formato predeterminado, crea o modifica documentos de formatos distintos.
        - Es un servidor de desarrollo: Ejecuta en la consola local un servidor que ejecuta el proyecto.
        - Carga y uso módulos (AMD, CommonJS o ES2015).
        - Concatenación de código: Repite fragmentos de código asociado a un primer código.
        - Minimización y ofuscación: la alteración literal del código mediante procesos de parcheo y sustitución, haciendo que el código resultante sea más reducido, optimizado y detección de errores. 
        - Verificación de buenas prácticas (linting): Estandariza el código para que los desarrolladores les sea más fácil de comprender.
        - Carga bajo demanda de módulos: Ejecuta los módulos solo en el momento necesarios para la ejecución.
