# Diferencias entre localStorage y sessionStorage

## Definición y similitudes
sessionStorage en JavaScript es una API de almacenamiento web que permite guardar pares clave/valor de forma local y temporal en el navegador. Los datos almacenados persisten durante la sesión de la página, manteniéndose al recargar, pero se eliminan automáticamente al cerrar la pestaña o ventana. En ese sentido se parece a localStorage, pues esta tembién guarda datos de manera local.

Métodos principales:
sessionStorage.setItem('clave', 'valor'): Almacena un dato.
sessionStorage.getItem('clave'): Obtiene un dato.
sessionStorage.removeItem('clave'): Elimina un dato específico.
sessionStorage.clear(): Limpia todo el almacenamiento de la sesión

## Diferencias
La diferencia es que sessionStorage borra los datos al cerrar la pestaña, mientras que localStorage los guarda hasta que los borre manualmente.
En localStorage os datos están disponibles en todas las pestañas del mismo dominio, y en sessionStorage los datos solo están disponibles en la pestaña actual.

## ¿Cuándo usar cada uno?
- **localStorage:** se usa si se necesita que se guarden datos durante más de una sesión, es decir, si se quiere tener acceso a los datos incluso depués de cerrar la ventana. Esto es útil en casos de querer tener un autocomplete de datos constante.
- **sessionStorage:** se usa si los datos solo son útiles durante la sesión actual, por ejemplo si solo se necesita tener una llave temporal.
