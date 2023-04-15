import { Router } from "express";
import controller from "../controllers/products.js";
import checkPermissions from "../middlewares/permissions.js";

const router = Router();

//Trae todos los productos
router.get('/' , controller.getAll)

//Crea un producto
router.post('/' ,checkPermissions("create"), controller.saveProduct)

//Actualiza un producto
router.put('/:pid' ,checkPermissions("update"),controller.updateProduct)

//Elimina un producto
router.delete('/:pid' ,checkPermissions("delete"), controller.deleteProduct)

export default router;