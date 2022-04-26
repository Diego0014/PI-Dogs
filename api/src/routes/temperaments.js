const { Router } = require("express");
const { Temperament } = require("../db");

const router = Router();

router.get("/", (req, res, next) => {
  return Temperament.findAll()
    .then((temperaments) => res.status(200).json(temperaments))
    .catch((err) =>next(err));
});


router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    const newTemperament = await Temperament.create({ name });
    res.status(201).send(newTemperament);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
