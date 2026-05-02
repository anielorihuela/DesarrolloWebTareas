-- 1. Total de usuarios por país
SELECT 
    Paises.nombre AS país,
    COUNT(Usuarios.id) AS total_usuarios
FROM Paises
LEFT JOIN Usuarios ON Paises.id = Usuarios.pais_id
GROUP BY Paises.id, Paises.nombre
ORDER BY total_usuarios DESC;

-- 2. Número de actores registrados por película
SELECT 
    Peliculas.titulo AS película,
    COUNT(PeliculaActor.actor_id) AS total_actores
FROM Peliculas
LEFT JOIN PeliculaActor ON Peliculas.id = PeliculaActor.pelicula_id
GROUP BY Peliculas.id, Peliculas.titulo
ORDER BY total_actores DESC;

-- 3. Películas con dos o más actores
SELECT 
    Peliculas.titulo AS película
FROM Peliculas
LEFT JOIN PeliculaActor ON Peliculas.id = PeliculaActor.pelicula_id
GROUP BY Peliculas.id, Peliculas.titulo
HAVING COUNT(PeliculaActor.actor_id) >= 2
ORDER BY Peliculas.titulo;

-- 4. Total de usuarios registrados por año
SELECT 
    SUBSTR(Usuarios.fecha_registro, 1, 4) AS año,
    COUNT(Usuarios.id) AS total_usuarios
FROM Usuarios
GROUP BY SUBSTR(Usuarios.fecha_registro, 1, 4)
ORDER BY año DESC;

-- 5. Total de usuarios por país y por año
SELECT 
    Paises.nombre AS país,
    SUBSTR(Usuarios.fecha_registro, 1, 4) AS año,
    COUNT(Usuarios.id) AS total_usuarios
FROM Usuarios
JOIN Paises ON Usuarios.pais_id = Paises.id
GROUP BY Paises.id, Paises.nombre, SUBSTR(Usuarios.fecha_registro, 1, 4)
ORDER BY país, año DESC;

-- 6. Películas por actor
SELECT 
    Actores.nombre AS actor,
    Peliculas.titulo AS película
FROM Actores
JOIN PeliculaActor ON Actores.id = PeliculaActor.actor_id
JOIN Peliculas ON PeliculaActor.pelicula_id = Peliculas.id
ORDER BY Actores.nombre, Peliculas.titulo;

-- 7. Actores en "Los Juegos del Hambre"
SELECT 
    Actores.nombre AS actor
FROM Actores
JOIN PeliculaActor ON Actores.id = PeliculaActor.actor_id
JOIN Peliculas ON PeliculaActor.pelicula_id = Peliculas.id
WHERE Peliculas.titulo = 'Los Juegos del Hambre'
ORDER BY Actores.nombre;

-- 8. Minutos totales empleados por cada usuario
SELECT 
    Usuarios.nombre AS usuario,
    SUM(Reproducciones.minutos_vistos) AS minutos_acumulados
FROM Usuarios
LEFT JOIN Reproducciones ON Usuarios.id = Reproducciones.usuario_id
GROUP BY Usuarios.id, Usuarios.nombre
ORDER BY minutos_acumulados DESC;

-- 9. Películas que no han tenido reproducciones
SELECT 
    Peliculas.titulo AS película
FROM Peliculas
LEFT JOIN Reproducciones ON Peliculas.id = Reproducciones.pelicula_id
WHERE Reproducciones.id IS NULL
ORDER BY Peliculas.titulo;

-- 10. RETO - Actores de películas vistas por usuarios de España
SELECT DISTINCT
    Actores.nombre AS actor
FROM Actores
JOIN PeliculaActor ON Actores.id = PeliculaActor.actor_id
JOIN Peliculas ON PeliculaActor.pelicula_id = Peliculas.id
JOIN Reproducciones ON Peliculas.id = Reproducciones.pelicula_id
JOIN Usuarios ON Reproducciones.usuario_id = Usuarios.id
JOIN Paises ON Usuarios.pais_id = Paises.id
WHERE Paises.nombre = 'España'
ORDER BY Actores.nombre;