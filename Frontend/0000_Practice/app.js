const pokemons = document.querySelector('#pokemons');
for (let i = 1; i <= 149; i++){
    const url = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${i}.png?raw=true`;
    const pokemon = document.createElement('div');
    const pokemonImg = document.createElement('img');
    pokemonImg.src = url
    const pokemonNumber = document.createElement('h3');
    pokemonNumber.innerText = `${i}`
    pokemon.append(pokemonImg, pokemonNumber)
    pokemon.classList.add('pokemon')
    pokemons.append(pokemon)
}
