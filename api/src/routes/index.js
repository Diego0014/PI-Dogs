const { Router } = require("express");
const getDogsRoute = require("./getDogs");
const postDogsRoute = require("./postDogs");
const temperamentRoute = require("./temperaments");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", getDogsRoute);
router.use("/dogs", postDogsRoute);
router.use("/temperaments", temperamentRoute);

module.exports = router;
