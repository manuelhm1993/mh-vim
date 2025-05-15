# Comandos de Vim

> Vim es un editor de texto muy potente y versátil. Aquí tienes una lista de comandos básicos y útiles para comenzar a usar Vim.
>
Se aprendió que vim es un proyecto de código abierto que está en github y que incluso tiene un fork que ya está publicado como una versión mejorada llamado neovim:

vim: GitHub - vim/vim: The official Vim repository

neovim: GitHub - neovim/neovim: Vim-fork focused on extensibility and usability

Ambas pueden ser instaladas desde su sitio oficial o con github, pero si ya se tiene una instalación limpia de git, el gitbash ya lo tiene incluido y en linux está preinstalado.

Comandos principales:

Para abrir el editor de vim: $ vim

Para salir del editor: $ :q

Para salir del editor a la fuerza: $ :q!

Para guardar cambios antes de salir: $ :wq
--
Desplazamiento en el teclado: todos los teclados están divididos entre la f y la j por dos zonas, los dedos índices de cada mano deberían estar posicionados en g y h, siguiendo esas instrucciones tenemos los siguientes desplazamientos con mano derecha:

Dedo índice tecla h: izquierda

Dedo meñique tecla l: derecha

Dedo corazón tecla j: abajo

Dedo anular tecla k: arriba

Atajos de teclado:

Tecla w: posiciona el cursor al inicio de la siguiente palabra

Tecla b: hace lo inverso que la w, estas dos nos permiten movernos en horizontal

Para desplazamiento hasta el final de la palabra se usa la tecla e
--
Los desplazamientos se hacen en modo normal, ahora, para realizar edición de texto con vim se usa la tecla i, esto activa la edición y se puede trabajar como en cualquier otro procesador de textos, luego de terminar la edición se le da a la tecla escape dos veces, para guardar y salir se ejecutan los comandos: :wq

Modo edición de texto antes del cursor: tecla i

Modo edición de texto después del cursor: tecla a

Modo edición de texto al final de la línea: tecla shift + a

Para borrar texto se usa el modo normal y la tecla x

Para guardar se debe estar en modo normal y luego usar :w
--
Desplazamientos en el archivo y en el proyecto:

Para ir a la definición de una función u objeto se usa en modo normal la combinación: g + d

Para ir a un archivo en específico se usa: g + f

Si al ejecutar el comando g + f da error, significa que se deben guardar cambios con :w luego se repite la operazión y se podrá abrir el archivo correspondiente

Al igual que un historial de navegación el buffer se llena con las búsquedas, esto permite ir hacia adelante y atrás

Para ir hacia atrás en la navegación: ctrl + o

Para ir hacia adelante en la navegación: ctrl + i
--
Comandos para eliminar texto masivamente en modo normal:

Para eliminar palabras: d + w

Para deshacer se usa la tecla: u (del inglés undo)

Para rehacer se usa la combinación: ctrl + r (del inglés redo)

Con estas dos juntas tenemos ctrl + z y ctrl + y

Eliminar una línea completa: d + $ ó d + shift + 4
--
Combinación de operadores y movimientos:

Para realizar la eliminación de línea completa a partir del cursor tenemos:

d + $ | d + e | d + w | d + b

Para multiplicar comandos se pueden usar números: 4 + w
--
Eliminar + almacenar en el clipboard = cortar, pegar

El comando: d + $ elimina a partir del cursor toda la línea sin borrar la línea, en cambio el comando d + d elimina completamente la línea

Para pegar lo almacenado en clipboard se usa la tecla: p