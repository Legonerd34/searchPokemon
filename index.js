async function fetchPoki() {

    


    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const sprite = document.getElementById("sprite");

        
        

        const pokemon =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        
        const data = await pokemon.json();
        const psprite = data.sprites.front_default;
        
        sprite.src = psprite;
        sprite.style.display = "block";

    
    }
    catch (error) {
        const ErrorMessage = document.getElementById("error");
        ErrorMessage.textContent = "No pokemon found";
        console.error(error);
    }
    

    


}