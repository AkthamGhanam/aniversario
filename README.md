# Nuestro Primer Año

Una sola página para celebrar el primer año de novios: veinte paradas, cada una con algo distinto que hacer, armadas con nuestras 31 fotos. Morado y verde, llena de animaciones, y pensada para teléfono y para PC.

## Cómo verla

Abre `index.html` en cualquier navegador. No hay nada que instalar ni compilar.

Para publicarla gratis con GitHub Pages: sube esta carpeta a un repositorio, entra en **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`. En un par de minutos queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

> Ojo: en GitHub Pages la página (y las fotos) quedan visibles para cualquiera que tenga el enlace.

## Las 20 paradas

| # | Parada | Qué se hace |
|---|--------|-------------|
| 1 | El latido | Mantener presionado el corazón para abrir la portada y arrancar el contador |
| 2 | El hilo y los globos | Jalar el hilo, caen 16 globos y hay que reventarlos para ver la foto |
| 3 | Rompecabezas | Intercambiar 12 piezas hasta armar la foto |
| 4 | Rasca y descubre | Frotar la tarjeta para destapar la foto |
| 5 | Memoria de filtros | Encontrar las seis parejas |
| 6 | El diario | Blog de fotos: se voltea cada una para leer lo que tiene atrás |
| 7 | La carta | Romper el sello; la carta se escribe sola |
| 8 | Atrapa los corazones | Mover la canasta y atrapar 15 |
| 9 | La ruleta de citas | Girarla y cobrar el vale que salga |
| 10 | ¿Qué filtro era? | Adivinar el filtro con la foto borrosa |
| 11 | Caras raras | Deslizar las fotos como una baraja |
| 12 | La constelación | Unir 12 estrellas en orden hasta formar un corazón |
| 13 | El candado | La clave está escrita en la foto |
| 14 | La linterna | Buscar a oscuras 5 corazones escondidos |
| 15 | Sopa de letras | Arrastrar sobre las letras para marcar 7 palabras |
| 16 | El jardín | Regar cinco macetas; cada flor guarda una foto |
| 17 | La mesa de fotos | Apartar las polaroids para encontrar la nota |
| 18 | El frasco de razones | Sacar papelitos con razones |
| 19 | El pastel | Encender la vela, escribir un deseo y soplar |
| 20 | El final | Corazón hecho con todas las fotos y fuegos artificiales al tocar |

El botón flotante con el corazón (abajo a la derecha) muestra cuántas paradas van completas y abre un mapa para saltar a cualquiera. Ahí mismo se apagan los sonidos.

## Cómo personalizarla

Todo lo que se puede cambiar está al principio de `js/app.js`, en el objeto `CONFIG`:

- `nombres`: los dos nombres para la portada. Vacío muestra "Tú & yo".
- `fechaInicio`: el día en que empezaron. De ahí sale el contador de días, horas, minutos y segundos.
- `carta` y `firma`: el texto de la carta, un párrafo por línea.
- `diario`: título, texto y nota escrita detrás de cada foto del diario.
- `caras`: los pies de foto de la baraja.
- `quiz`: preguntas y respuestas del juego de filtros.
- `citas`: los ocho planes de la ruleta.
- `palabras`: las palabras de la sopa de letras (máximo 9 letras cada una, sin tildes).
- `razones`: los papelitos del frasco.
- `clave`: los números del candado.

Las fotos están en `fotos/` (`f01.jpg` a `f31.jpg`) y sus miniaturas cuadradas en `fotos/mini/`. Para cambiar una, reemplaza el archivo conservando el nombre.

## Estructura

```
index.html        las 20 secciones
css/styles.css    colores, tipografías y animaciones
js/app.js         CONFIG y la lógica de cada parada
fotos/            31 fotos y sus miniaturas
```

Sin dependencias: HTML, CSS y JavaScript puros. Las tipografías se cargan de Google Fonts y hay respaldo si no hay conexión.
