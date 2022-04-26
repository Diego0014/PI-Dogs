const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const axios = require("axios");
const router = Router();

router.get("/", async (req, res, next) => {
  let dogApi = await axios.get("https://api.thedogapi.com/v1/breeds");
  let dogDb = await Dog.findAll({
    include: Temperament,
  });
  Promise.all([dogApi, dogDb]).then((resp) => {
    const [dogApi, dogDb] = resp;
    let filteredDogApi = dogApi.data.map((e) => {
      return {
        id: e.id,
        name: e.name,
        height: e.height,
        weight: e.weight,
        life_span: e.life_span,
        image: e.image.url,
      };
    });
    let allDogs = [...filteredDogApi, ...dogDb];
    res.send(allDogs);
  });
});

router.get("/:id", async(req,res,next)=>{
  const {id} = req.params;

  if(id.length<5){
    try {
      const listOfDogs = await axios.get('https://api.thedogapi.com/v1/breeds');
      res.json(listOfDogs.data.find(dog => dog.id === id));
    } catch (error) {
      next(error);
    }
  }else{
    try {
      Dog.findAll({
        where:{id:id},
        include:{
          model:Temperament,
          attributes:['name'],
          through:{
            attributes:[]
          }
        }
      }).then(result => res.send(result));
    } catch (error) {
      next(error);
    }
  }
})

module.exports = router;