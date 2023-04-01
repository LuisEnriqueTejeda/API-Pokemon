import React, { useEffect, useState } from "react";
import "./Pokedex.scss";
import getPokemon from "../../Helpers/getPokemon.js";
import SinglePokemon from "../SinglePokemon/SinglePokemon";
import PokemonGrid from "../PokemonGrid/PokemonGrid";

const apiURL = `https://pokeapi.co/api/v2/pokemon/`;

const Pokedex = () => {
  const [pokeList, setPokeList] = useState([]);
  const [selectedPoke, setSelectedPoke] = useState(0);

  //Cuando nace el componente
  useEffect(() => {
    //Carga los datos
    (async () => {
      const pokeData = await getPokemon(apiURL);
      setPokeList(pokeData.results);
    })();
  }, []);

  const updatePokemon = (id) => {
    setSelectedPoke(id)
  }

  return (
    <>
      <main className="pokeApp">
        <section className="CardSolo">
            <SinglePokemon pokeID={selectedPoke} />
        </section>
        <section className="CardVarios">
          {pokeList.length === 0 ? (
            <p>PokeList está vacio</p>
          ) : (
            <PokemonGrid listaPokes={pokeList} selectPoke={updatePokemon} />
          )}
        </section>
      </main>
    </>
  );
};

export default Pokedex;

