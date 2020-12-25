// Middleware para proceso de Incubación
const Incubation = require("../models/incubation");

// Busqueda de application por _id
exports.incubacionId = (req, res, next, id) => {
  Incubation.findById(id).exec()
    .then(incubacion => {
      if (!incubacion) {
        return res.status(400).send({ message: "Error!" });
      }
      req.incubacion = incubacion;
      next();
    }).catch(
      error => res.status(500).send({ message: "Error!!" })
    );
};

exports.incubacion = () => {

};

exports.ActualizarEtapa = () => {

};