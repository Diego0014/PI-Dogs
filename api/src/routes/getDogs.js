const { Router } = require("express");
const { Dog, Temperament, Op } = require("../db");
const axios = require("axios");
const router = Router();
const fetch = require("node-fetch");
//const { Op } = require("sequelize");

/* router.get("/", async (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    try {
      let dogApi = await axios.get("https://api.thedogapi.com/v1/breeds");
      let dogDb = await Dog.findAll({
        include: Temperament,
      });
      Promise.all([dogApi, dogDb]).then((response) => {
        const [dogApi, dogDb] = response;
        let filteredDogApi = dogApi.data.map((e) => {
          return {
            id: e.id,
            name: e.name,
            height: e.height.metric,
            weight: e.weight.metric,
            life_span: e.life_span,
            image: e.image.url,
          };
        });
        let arrayDogs = [...filteredDogApi, ...dogDb];
        res.send(arrayDogs);
      });
    } catch (error) {
      next(error);
    }
  } else {
    try {
      let dogApi = await axios.get(
        `https://api.thedogapi.com/v1/breeds/search?q=${name}`
      );
      const dogDb = await Dog.findAll({
        where: {
          name: { [Op.substring]: name },
        },
        attributes: ["name", "id", "height", "weight", "life_span", "image"],
        include: Temperament,
      });
      res.send(dogDb).then(() => {
        if (dogApi.data.length > 0) return res.send(dogApi.data);
        else {
          return res.status(400).send("error");
        }
      });
    } catch (error) {
      res.send(error);
    }
  }
}); */

router.get("/", async (req, res, next) => {
  const { name } = req.query;

  const querySearch = async () => {
    const dogApi = await fetch(
      `https://api.thedogapi.com/v1/breeds/search?q=${name}`
    )
      .then((element) => element.json())
      .then((resElement) => {
        if (!resElement.length) {
          return { msg: "No dogs found :(" };
        } else {
          const matchDogs = resElement.map((e) => {
            return {
              id: e.id,
              name: e.name,
              height: e.height.metric,
              weight: e.weight.metric,
              life_span: e.life_span,
              image: !e.hasOwnProperty("reference_image_id")
                ? "No image found"
                : e.reference_image_id,
            };
          });
          return matchDogs;
        }
      })
      .then((finalRes) => {
        return finalRes;
      });
    return dogApi;
  };

  const dogsApi = async () => {
    const api = await fetch("https://api.thedogapi.com/v1/breeds")
      .then((e) => e.json())
      .then((element) =>
        element.map((e) => {
          return {
            id: e.id,
            name: e.name,
            height: e.height.metric,
            weight: e.weight.metric,
            life_span: e.life_span,
            image: e.image.url,
            temperament: e.temperament
          };
        })
      )
      .then((e) => e);
    return api;
  };
  const dogsDb = async () => {
    const db = await Dog.findAll({
      attributes: ["name", "id", "height", "weight", "life_span", "image"],
      include: Temperament,
    });
    if(!db.length){
      return {msg:'There are no dogs in the database'}
    }else{   
      const allDogs=db.map((d) =>d.dataValues);
      return allDogs;
    }
  };
  
  try {
    if(name){
      res.send(await querySearch())
    }else{
      Promise.all([await dogsApi(), await dogsDb()])
      .then(resp=>{
        const perro = resp[0];
        const perro2 =resp[1];
        if(!perro2.msg){
        const perros = [...perro, ...perro2];
        return perros;
        }else return perro;
      }).then(e=>res.send(e));
    }
  } catch (error) {
    res.send(next(error));
  }

});

module.exports = router;
