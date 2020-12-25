const express = require("express");
const router = express.Router();

// Servicios
const { proyectoId } = require("../controllers/project");
const { applicationId } = require("../controllers/application");
const { requireSignin, Auth, Admin } = require("../controllers/auth");
const { incubacionId, incubacion, actualizarEtapa } = require("../controllers/incubation");

// Rutas
router.post("/incubacion/ingreso/:proyectoId/:userId", requireSignin, Auth, Admin, incubacion);
router.put("/incubacion/actualizacion/:proyectoId/:userId", requireSignin, Auth, Admin, incubacion);


// Parametros
router.param("proyectoId", proyectoId);
router.param("applicationId", applicationId);
router.param("incubacionId", incubacionId);

// Exportación
module.exports = router;