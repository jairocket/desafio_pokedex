const express = require('express');
const pokemonList = require('./pokemonList');

/*const pokemonList = {
    rattata: 1,
    pineco: 2
}*/


const app = express();

app.get('/pokemons', (req, res) => {
    res.send(pokemonList);
    
});


app.listen(3000, () => {
    console.log('server is running on port 3000!')
});

