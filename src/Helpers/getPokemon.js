const getPokemon = async(api) => {
    try{
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
    catch(error){
        return(error);
    }
}

export default getPokemon;