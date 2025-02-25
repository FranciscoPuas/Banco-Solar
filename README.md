markdown
Copy
# Banco Solar C.A

Este proyecto es una aplicación web para la gestión de usuarios y transferencias en un banco ficticio llamado Banco Solar C.A.

## Estructura del Proyecto
 .env  <br>
 .gitignore  <br>
 connection/  <br>
    connection.js <br>
controllers/  <br>
    auth.js  <br>
    transferencia.js  <br>
    user.js  <br>
    usuario.js  <br>
helpers/  <br>
    generator-jwt.js  <br>
    validator-bd.js  <br>
index.js  <br>
middlewares/  <br>
    validar-campos.js  <br> 
    validator-jwt.js  <br>
    validator-roles.js  <br>
models/  <br>
    rol.js  <br>
    transferencia.js  <br>
    user.js  <br>
    usuario.js  <br>
package.json  <br>
public/  <br>
    index.html  <br>
routes/  <br>
    auth.js  <br>
    transferencia.js  <br>
    user.js   <br>
    usuario.js  <br>
server/  
    server.js  
service/  
    auth.js  
    transferencia.js  
    user.js  
    usuario.js  
sync.js  

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <repositorio>
Navega al directorio del proyecto:

bash
Copy
cd <directorio-del-proyecto>
Instala las dependencias:

bash
Copy
npm install
Configuración
Configura la variable de entorno SECRETKEY en el archivo .env:

env
Copy
SECRETKEY=123456
Configura la conexión a la base de datos en connection/connection.js:

javascript
Copy
const sequelize = new Sequelize('postgres://USUARIO:CONTRASEÑA@localhost:5432/NOMBRE_BD');
Uso
Sincroniza la base de datos:

bash
Copy
node sync.js
Inicia el servidor:

bash
Copy
node index.js
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
Este proyecto está licenciado bajo la Licencia ISC.
