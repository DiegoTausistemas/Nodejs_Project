const express = require("express");
const router = express.Router();

// Servicios
const { requireSignin, Auth, Admin } = require("../controllers/auth")
const { userId, consultarUsuarios, eliminarUsuario, actualizarUsuario } = require("../controllers/user");

// Rutas
router.post("/user/consultar/:userId", requireSignin, Auth, Admin, consultarUsuarios);
router.delete("/user/eliminar/:userId", requireSignin, Auth, Admin, eliminarUsuario);
router.put("/user/actualizar/:userId", requireSignin, Auth, actualizarUsuario);

// parametros
router.param("userId", userId);

// Exportacion
module.exports = router