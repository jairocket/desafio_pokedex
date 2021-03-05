const express = require('express');
const pokemonList = require('./pokemonList');

/*const pokemonList = {
    rattata: 1,
    pineco: 2
}*/


const app = express();

app.get('/', (req, res) => {
    res.send(pokemonList);
    
});

function search(name, array){
    for (let i in array){
        if (name === array[i]){
            let message = "Temos um " + name + " pra você!"
            return message
        }
    }
    return "pokemon não encontrado!"
}

app.get('/pokemons', (req, res) => {
    res.send(search(req.query.name, pokemonList));
    
});


app.listen(3000, () => {
    console.log('server is running on port 3000!')
});

