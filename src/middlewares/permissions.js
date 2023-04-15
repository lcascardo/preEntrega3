// Middleware para comprobar los permisos del usuario
function checkPermissions(action) {
    return function(req, res, next) {
      const user = req.session.user;
      
      // Verificar si el usuario es administrador y está intentando realizar una acción de administrador
      if (user.rol == 'admin' && ['create', 'update', 'delete'].includes(action)) {
        return next();
      }
      
      // Verificar si el usuario es usuario normal y está intentando realizar una acción de usuario
      if (user.rol == 'user' && ['add to cart'].includes(action)) {
        return next();
      }
      
      // Si el usuario no tiene los permisos necesarios, devuelve un error 403
      return res.status(403).send('No tienes permiso para realizar esta acción.');
    }
  }

  export default checkPermissions