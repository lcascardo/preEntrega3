# preEntrega3
EL ARCHIVO .ENV YA ESTA AGREGADO

INSTRUCCIONES PARA LEVANTAR SERVICIO
1- Colocar el comando nodemon src/app.js 

ENDPOINTS (Utilizar postman para probar endpoints): <br>
-VIEW ROUTER: <br>
'http://localhost:8080/' MUESTRA TODOS LOS USUARIOS <br>
'http://localhost:8080/products' MUESTRA LOS PRODUCTOS <br> 
'http://localhost:8080/register' SIRVE PARA REGISTRAR USUARIOS <br>
'http://localhost:8080/login' SIRVE PARA PODER LOGUEAR UN USUARIO YA CREADO <br>
'http://localhost:8080/logout' SIRVE PARA PODER CERRAR LA SESION QUE ESTA ACTIVA <br>


-PRODUCTS ROUTER: <br>
'http://localhost:8080/api/products' TRAE TODOS LOS PRODUCTOS <br>
POST'http://localhost:8080/api/products' CREA UN NUEVO PRODUCTO <br>
PUT 'http://localhost:8080/api/products/:pid' ACTUALIZA UN PRODUCTO POR ID <br>
DELETE 'http://localhost:8080/api/products/:pid' BORRA UN PRODUCTO POR ID <br>

-CARTS ROUTER: <br>
'http://localhost:8080/api/carts' TRAE TODOS LOS CARRITOS <br>
POST 'http://localhost:8080/api/carts' CREA CARRITO NUEVO <br>
POST 'http://localhost:8080/api/carts/:cid/product/:pid' AGREGA PRODUCTO POR ID A CARRITO POR ID <br>
DELETE 'http://localhost:8080/api/carts/:cid/product/:pid' BORRA PRODUCTO POR ID DE CARRITO POR ID <br>
PUT 'http://localhost:8080/api/carts/:cid' ACTUALIZA CARRITO <br>
PUT 'http://localhost:8080/api/carts/:cid/product/:pid' AUMENTA CANTIDAD DE MISMO PRODUCTO EN EL CARRITO <br>
DELETE 'http://localhost:8080/api/carts/:cid' VACIA CARRITO POR COMPLETO <br>
POST 'http://localhost:8080/api/carts/:cid/purchase' HACE TICKET DE COMPRA DE LOS PRODUCTOS AGREGADOS EN EL CARRITO <br>

-USERS ROUTER <br>
'http://localhost:8080/api/users' TRAE TODOS LOS USUARIOS <br>
POST 'http://localhost:8080/api/users' CREA UN USUARIO NUEVO <br>
PUT 'http://localhost:8080/api/users/:uid/carts/:cid' VINCULA UN CARRITO CON UN USUARIO <br>

INSTRUCCIONES PARA TESTEAR: <br>
1- Colocar endpoint 'http://localhost:8080/login' para loguearse <br>
2- Loguearse con los datos siguientes: <br>
correo: prueba1@gmail.com  <br>
contraseña: 123 <br>
3- Una vez logueado (le debe aparecer rol user) intentar crear un producto llenando las casillas con datos aleatorios (no deberia dejarlo crearlo porque tiene el rol usuario) <br>
4- Luego apretar en tecla logout <br>
5- Loguearse nuevamente en 'http://localhost:8080/login' pero esta vez con el mail del admin: <br>
correo: admin@coder.com <br>
contraseña: 123 <br>
6- Crear nuevamente un producto (esta vez lo deberia dejar porque tiene rol de admin) <br>
7-Ahora utilizar postman para probar la creacion de tickets <br>
8-Utilizar el endpoint http://localhost:8080/api/carts/643a384371b82501f972b8cd/purchase (creara un ticket con los porductos que ya estan en el carrito de ese usuario)











