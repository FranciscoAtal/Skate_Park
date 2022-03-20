Instrucciones.
--------------

 1.- Se debe instalar los siguientes paquetes en Node:
     npm i -D nodemon
     npm i express
     npm i express-handlebars
     npm i express-fileupload
     npm i dotenv
     npm i pg
     npm i body-parser
     npm i cookie-parser
     npm i jsonwebtoken

 2.- Ingresar a postgress con SQL Shell (psql) con su cuenta:
      - Revisar que exista la Base de datos sino revisar archivo data.sql si esta correcta las instrucciones debes ir al terminal y ejecutar la siguiente instrucción: node migrate.js.

 3.- En el archivo api.js existen las rutas para las API.-

 4.- En el archivo front.js existen las rutas para el Front.

 5.- En el archivo admin.handlebard esta la pantalla donde muestra todos los participantes y permite Iniciar Sesion y Registrarme.

 6.- En el archivo login.handlebard esta la pantalla donde nos permite logearse en el desafio y muestra nuestro datos.

 7.- En el archivo datos.handlebard esta la pantalla donde nos muestra los datos del perfil y nos permite Actualizar o Eliminar Cuenta.

 8.- En el archivo registro.handlebard esta la pantalla donde nos permite ingresar un nuevo participante.
 
 9.- En la ruta /administrador esta la pantalla donde nos permite cambiar el estado de los participantes.

10.- En el archivo index.js tenemos el programa principal donde incorporamos los paquetes necesarios para la ejecución del proyecto.

11.- La ejecución la hacemos con el paquete nodemon de la siguiente manera:
     nodemon index.js.-

12.- Para hacer pruebas de testing instalamos:
     - npm install cypress --save-dev
     - en el archivo package.json agregamos una linea:
        "cypress:open": "cypress open"
     - luego en la terminal ejecutamos: npm run cypress:open
     - asi en la ventana de Chome con la informacion de los test de Prueba de Cypress
        - Smoke test.
        - Test a 1 Input.
        - Test a 1 Boton.

13.- Hay que configurar el proyecto para ser desplegado en Heroku.-
