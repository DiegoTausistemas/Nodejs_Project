const express = require("express");
const router = express.Router();

// Servicios
const { userId } = require("../controllers/user");
const { areaId } = require("../controllers/area");
const { ProyByUser } = require("../controllers/user");
const { requireSignin, Auth, Admin } = require("../controllers/auth");
const { proyectoId, ingresoProy, consultaProy, actualizarProy, gantt, buscadorDocumentos, eliminarDocumento } = require("../controllers/project");

// Rutas
router.post("/proyecto/ingresar/:userId", requireSignin, Auth, ingresoProy);
router.get("/proyecto/consultar/:userId", requireSignin, Auth, Admin, consultaProy);
router.get("/proyecto/consultar/usuario/:userId", requireSignin, Auth, ProyByUser);
router.put("/proyecto/actualizar/:proyectoId/:userId", requireSignin, Auth, Admin, actualizarProy);
router.post("/proyecto/gantt/:proyectoId/:userId", requireSignin, Auth, gantt);
router.get("/proyecto/consultar/gantt/:proyectoId/:userId", requireSignin, Auth, buscadorDocumentos);
router.delete("/proyecto/eliminar/gantt/:proyectoId/:userId", requireSignin, Auth, eliminarDocumento);

// Parametros
router.param("areaId", areaId);
router.param("userId", userId);
router.param("proyectoId", proyectoId);

// Exportacion
module.exports = router;