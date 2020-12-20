// Middleware para contexto de area
const Area = require("../models/area");

// Busqueda de area por Id
exports.areaId = (req, res, next, id) => {
  Area.findById(id).exec((err, area) => {
    if (err || !area) {
      return res.status(400).json({
        error: 'Area no encontrada'
      });
    }
    req.area = area;
    next();
  });
}

// Ingresar areas de proyectos
exports.ingrearArea = (req, res) => {
  const area = new Area(req.body);
  area.save()
    .then(
      area => res.status(201).send({ area })
    ).catch(
      error => res.status(500).send({ message: "Error en la Solicitud de ingreso" })
    );
};

// Consultar areas para proyectos
exports.consultarArea = (req, res) => {
  Area.find({})
    .then(area => {
      if (area.length) {
        return res.status(200).send({ area });
      }
      return res.status(400).send({ message: "No se encontraron areas registradas" });
    }).catch(
      error => res.status(500).send({ message: "Error en Servidor" })
    );
};

// Actualizar areas
exports.actualizarArea = (req, res) => {
  const area = req.area;
  area.name = req.body.name;
  area.save()
    .then(
      area => res.status(201).send({ area })
    ).catch(
      error => res.status(500).send({ message: "Error en la solicitud de Actualización" })
    );
};

// Eliminar un area
exports.eliminarArea = (req, res) => {
  const area = req.area;
  area.remove()
    .then(
      area => res.status(200).send({ message: "Area Eliminada" })
    ).catch(
      error => res.status(500).send({ message: "Error en la solicitud de eliminación" })
    );
};