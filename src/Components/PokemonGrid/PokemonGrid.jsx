import React from "react";
import './PokemonGrid.scss';
import Card from "@mui/material/Card";
import ImagePoke from "../UI_Components/ImagePoke/ImagePoke";

const PokemonGrid = ({ listaPokes, selectPoke }) => {

    const extractId = (urlString) => {
        const urlArray = urlString.split('/');
        return urlArray[urlArray.length - 2];
    }

    return (
        listaPokes.length !== 0 ?
            <div className="pokeGrid">
                {
                    listaPokes.map(
                        (pokemon) =>
                            <Card
                                variant="outlined"
                                className="gridCard"
                                key={pokemon.name}
                                // onClick={()=>{console.log(extractId(pokemon.url));}}
                                onClick={ () => {
                                    selectPoke(extractId(pokemon.url));
                                } }
                            >
                                {
                                    <>
                                        <ImagePoke url={pokemon.url} />
                                        <h2>{pokemon.name}</h2>
                                    </>
                                }
                            </Card>
                    )
                }
            </div>

            :
            <p>Cargando...</p>

    );
}

export default PokemonGrid;