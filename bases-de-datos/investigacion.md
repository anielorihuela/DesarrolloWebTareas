--¿Qué es una transacción? ¿Para qué se usa?--

Una transacción es un bloque de operaciones que la base de datos trata como una sola unidad de trabajo. En PostgreSQL, una transacción puede agrupar varias sentencias entre BEGIN y COMMIT; si algo sale mal, se puede usar ROLLBACK para deshacer los cambios. En términos prácticos, se usan para que los datos no queden a medias. Por ejemplo, si en una app bancaria se descuenta dinero de una cuenta y se deposita en otra, ambas operaciones deben completarse juntas o no completarse en absoluto.

--¿Cómo puedo evitar que el comando para crear una tabla falle si la tabla ya está creada?--

Para evitar que falle, se usa IF NOT EXISTS dentro del CREATE TABLE. Así, si la tabla ya existe, la base de datos no lanza error y simplemente no la vuelve a crear.
CREATE TABLE IF NOT EXISTS alumnos ...

--¿Qué es un trigger o disparador? Da dos ejemplos de cuándo es bueno usarlo--

Un trigger, o disparador, es una acción automática que la base de datos ejecuta cuando ocurre cierto evento, por ejemplo un INSERT, UPDATE o DELETE. Sirve para automatizar lógica que conviene dejar dentro de la base de datos y no depender solo del código de la aplicación.

Dos casos donde es buena idea usarlo son estos:

1. Actualizar automáticamente una fecha de modificación.
Si una fila cambia, el trigger puede llenar o actualizar una columna como updated_at sin que el programador tenga que acordarse de hacerlo en cada consulta.

2. Llevar auditoría de cambios.
Si alguien borra o modifica un registro importante, el trigger puede guardar quién hizo el cambio, cuándo lo hizo y qué valores tenía antes. 

--¿Qué es SQL Injection? ¿Qué implicaciones tiene?--

SQL Injection es una vulnerabilidad en la que un atacante mete instrucciones SQL maliciosas en campos de entrada que la aplicación no valida correctamente. Con eso puede consultar datos que no debería ver, modificar información, borrar registros, saltarse autenticaciones y en algunos casos afectar otros sistemas conectados. 

--Tres noticias de talla mundial relacionadas con SQL Injection--
1. Caso Sony Pictures y el grupo LulzSec

Un caso muy conocido fue el de Sony Pictures. Reuters reportó que integrantes de LulzSec fueron acusados de haber robado información del estudio mediante un ataque de SQL injection contra su sitio web. Lo grave de este caso es que no se trató solo de una molestia técnica, sino de una filtración real de datos personales de usuarios, lo cual mostró que una vulnerabilidad aparentemente básica podía terminar en un incidente internacionalmente visible.

2. Caso TalkTalk en Reino Unido

Otro caso muy importante fue el de la empresa de telecomunicaciones TalkTalk. Reuters informó que el ataque puso en riesgo datos financieros de millones de clientes, y después la ICO, autoridad británica de protección de datos, explicó que el tipo de ataque identificado fue SQL injection sobre páginas vulnerables heredadas de una adquisición anterior. El caso tuvo consecuencias muy visibles: pérdida de clientes, costos millonarios y un fuerte golpe reputacional. Para mí, este ejemplo deja claro que una mala seguridad en formularios y consultas puede terminar afectando directamente al negocio.

3. Ataque a sitios de la ONU

Reuters también reportó un ataque contra sitios de la ONU en el que, según CNET citado por la agencia, los responsables parecían haber usado SQL injection. Aunque el sitio fue limpiado en pocas horas, el hecho fue mundialmente relevante porque mostró que ni siquiera una organización internacional tan visible está exenta de fallas básicas de seguridad web. 

--¿Qué es un ORM y qué diferencias existen con escribir sentencias de SQL comunes?--

Un ORM, por sus siglas en inglés Object Relational Mapper, es una herramienta que permite trabajar con la base de datos usando objetos del lenguaje de programación en lugar de escribir todo en SQL manualmente. Por ejemplo, en vez de escribir un SELECT * FROM usuarios, en un ORM normalmente se trabaja con clases como Usuario y métodos para consultar, insertar o actualizar datos.

La diferencia principal con escribir SQL común es el nivel de abstracción. Con SQL escrito a mano se tiene más control, normalmente se pueden optimizar mejor consultas complejas y se entiende con más claridad qué está pasando en la base. Con ORM se gana productividad, legibilidad y organización del código de la aplicación, pero a veces se pierde precisión o rendimiento en consultas complicadas. En resumen, el ORM es muy útil para desarrollar más rápido y mantener el código, mientras que SQL puro suele ser mejor cuando se necesita control total sobre la consulta.