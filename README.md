Banco Solar C.A
Este proyecto es una aplicación web para la gestión de usuarios y transferencias en un banco ficticio llamado Banco Solar C.A.

Estructura del Proyecto
Instalación
Clona el repositorio:
Navega al directorio del proyecto:
Instala las dependencias:
Configuración
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

Configura la conexión a la base de datos en connection/connection.js:

Uso
Sincroniza la base de datos:

Inicia el servidor:

Abre tu navegador y navega a http://localhost:3000 para ver la aplicación en funcionamiento.

Endpoints
Autenticación
POST /auth/login: Iniciar sesión.
Usuarios
GET /usuarios: Obtener todos los usuarios.
POST /usuario: Crear un nuevo usuario.
PUT /usuario: Actualizar un usuario existente.
DELETE /usuario: Eliminar un usuario.
Transferencias
GET /transferencias: Obtener todas las transferencias.
POST /transferencia: Crear una nueva transferencia.
Dependencias
bcryptjs
dotenv
express
express-validator
jsonwebtoken
pg
pg-hstore
sequelize
Licencia
Este proyecto está licenciado bajo la Licencia ISC. 3. Abre tu navegador y navega a http://localhost:3000 para ver la aplicación en funcionamiento.

Endpoints
Autenticación
POST /auth/login: Iniciar sesión.
Usuarios
GET /usuarios: Obtener todos los usuarios.
POST /usuario: Crear un nuevo usuario.
PUT /usuario: Actualizar un usuario existente.
DELETE /usuario: Eliminar un usuario.
Transferencias
GET /transferencias: Obtener todas las transferencias.
POST /transferencia: Crear una nueva transferencia.
Dependencias
bcryptjs
dotenv
express
express-validator
jsonwebtoken
pg
pg-hstore
sequelize
