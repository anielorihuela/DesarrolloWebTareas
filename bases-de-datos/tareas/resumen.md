NOTA: No asistí a esta clase, así que no tengo los ejercicios para hacer las comparaciones, una disculpa.

Resumen: Normalización de Bases de Datos

¿Qué es?
-La normalización de bases de datos es un proceso de diseño que organiza los datos en estructuras de tablas específicas mediante reglas llamadas "formas normales". Su objetivo es mejorar la integridad de los datos, prevenir anomalías y minimizar la redundancia.

Conceptos clave

Claves en la normalización:

-Clave primaria: Identifica de forma única cada fila
-Clave foránea: Establece relaciones entre tablas
-Dependencias funcionales: Relaciones entre atributos que determinan cómo se organizan los datos

Beneficios principales

-Previene anomalías de inserción, eliminación y actualización
-Reduce datos duplicados innecesarios
-Disminuye costos de almacenamiento
-Mejora la velocidad de consultas
-Mantiene la consistencia de los datos

Formas normales

-1FN: Elimina repeticiones en columnas y requiere clave primaria
-2FN: Los datos deben depender de toda la clave primaria (si es compuesta)
-3FN: Los datos no-clave no pueden depender unos de otros, solo de la clave primaria
-4FN y 5FN: Se aplican en casos más complejos y específicos

Desafíos
-Aunque la normalización mejora la organización, puede aumentar la complejidad general de la base de datos. Las consultas pueden volverse más lentas al requerir múltiples JOINs entre tablas, y su implementación requiere expertise significativa.