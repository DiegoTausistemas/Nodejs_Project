const express = require("express");
const router = express.Router();

// Servicios
const { userId } = require("../controllers/user");
const { proyectoId } = require("../controllers/project");
const { requireSignin, Auth, Admin } = require("../controllers/auth");
const { applicationId, procesar, condicion, resolucion } = require("../controllers/application");

// Rutas
router.post("/postulacion/ingreso/:userId", requireSignin, Auth, Admin, procesar);
router.get("/postulacion/condicion/:userId", requireSignin, Auth, Admin, condicion);
router.put("/postulacion/:applicationId/condicion/:userId", requireSignin, Auth, Admin, resolucion);

// Parametros
router.param("userId", userId);
router.param("proyectoId", proyectoId);
router.param("applicationId", applicationId);

// Exportación
module.exports = router;


/**
 * resumen: proyectos en proceso (condicion)
 * resolucion: aprobar o rechazar para incubar  --> pasa a espera de incubar
 */