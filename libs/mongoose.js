// const mongoose = require('mongoose');
// require('dotenv').config();

// // Conexion a MongoDB
// const db = async () => {
//   try {
//     const success = await mongoose.connect(process.env.DATABASE, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     });
//     console.log('Base Mongo conectada...');
//   } catch (error) {
//     console.log('DB conexion, error', error);
//   }
// };

// exports.db = db;