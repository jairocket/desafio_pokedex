const axios = require('axios').default;

const objectSource = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150'

pokemonList =[]

 axios.get(objectSource).then((res)=>{for (let pokemon of res.data.results){pokemonList.push(pokemon.name)}} )

module.exports = pokemonList

















   



