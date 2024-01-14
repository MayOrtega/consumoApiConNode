const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async(req, res) => {
   try{
    const responseUser = await axios.get(`https://random.me/api/`);
    const randomUser = responseUser.data.results[0];

    const responseCocktail = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const randomCocktail = responseCocktail.data.drinks[0];

    const userWithDrink = {
        users: [
            {
              name: `${randomUser.name.first} ${randomUser.name.last}`,
              email: randomUser.email,
              country: randomUser.nat,
              "favourite-coctail": randomCocktail.strDrink
            }
          ]
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(userWithDrink, null, 2));
   } catch(error){
    res.status(500).send("Error interno del servidor")
   }
});
module.exports = router;