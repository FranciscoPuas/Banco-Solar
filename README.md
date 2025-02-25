markdown
Copy
# Banco Solar C.A

Este proyecto es una aplicación web para la gestión de usuarios y transferencias en un banco ficticio llamado Banco Solar C.A.

## Estructura del Proyecto
* .env
* .gitignore
* connection/
  * connection.js
* controllers/
  * auth.js
  * transferencia.js
  * user.js
  * usuario.js
* helpers/
  * generator-jwt.js
  * validator-bd.js
* index.js
* middlewares/
  * validar-campos.js
  * validator-jwt.js
  * validator-roles.js
* models/
  * rol.js
  * transferencia.js
  * user.js
  * usuario.js
* package.json
* public/
  * index.html
* routes/
  * auth.js
  * transferencia.js
  * user.js
  * usuario.js
* server/
  * server.js
* service/
  * auth.js
  * transferencia.js
  * user.js
  * usuario.js
* sync.js
* 
## Instalación

1. Clona el repositorio:
   ```bash
   git clone <repositorio>
* Navega al directorio del proyecto:
  * ```bash
    cd <nombre_del_directorio>
    ```
* Instala las dependencias:
  * ```bash
    npm install
    ```
* Configuración
  * Configura la variable de entorno `SECRETKEY` en el archivo `.env`:
    * ```env
      SECRETKEY=123456
      ```
  * Configura la conexión a la base de datos en `connection/connection.js`:
    * ```javascript
      const sequelize = new Sequelize('postgres://USUARIO:CONTRASEÑA@localhost:5432/NOMBRE_BD');
      ```
* Uso
  * Sincroniza la base de datos:
    * ```bash
      node sync.js
      ```
  * Inicia el servidor:
    * ```bash
      node index.js
      ```
  * Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

* Endpoints
  * Autenticación
    * **POST** `/auth/login`: Iniciar sesión.
  * Usuarios
    * **GET** `/usuarios`: Obtener todos los usuarios.
    * **POST** `/usuario`: Crear un nuevo usuario.
    * **PUT** `/usuario`: Actualizar un usuario existente.
    * **DELETE** `/usuario`: Eliminar un usuario.
  * Transferencias
    * **GET** `/transferencias`: Obtener todas las transferencias.
    * **POST** `/transferencia`: Crear una nueva transferencia.

* Dependencias
  * bcryptjs
  * dotenv
  * express
  * express-validator
  * jsonwebtoken
  * pg
  * pg-hstore
  * sequelize
    
Licencia  
Este proyecto está licenciado bajo la Licencia ISC.
