const User = require("../models/user");

// Buscar usuarios por _id
exports.userId = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'Usuario no encontrado'
      });
    }
    req.profile = user;
    next();
  });
};

// Consulta de usuarios registrados (admin y regulares)
exports.consultarUsuarios = (req, res) => {
  User.find({})
    .then(users => {
      if (users.length) {
        return res.status(200).send({ users });
      }
      return res.status(400).send({ message: "No se encontro la info. requerida" });
    }).catch(
      error => res.status(500).send({ error })
    );
};

// Eliminar un usuario mediante su rut
exports.eliminarUsuario = (req, res) => {
  const rut = req.body;
  User.findOneAndDelete({})
    .then(user => {
      if (user) {
        return res.status(200).send({ message: "Usuario Eliminado" });
      }
      return res.status(400).send({ message: "No se encontro el usuario" });
    }).catch(
      error => res.status(500).send({ message: "Error en Servidor" })
    )
};

// Actualizar datos del usuario
exports.actualizarUsuario = (req, res) => {
  User.findOneAndUpdate({ _id: req.profile._id }, { $set: req.body }, { new: true }, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: "No estas autorizado"
      });
    }
    user.hashedpass = undefined;
    res.json(user);
  });
};