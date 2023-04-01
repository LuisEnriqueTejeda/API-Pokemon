import React, {useEffect, useState} from "react";
import './SinglePokemon.scss';
import Card from "@mui/material/Card";
import getPokemon from "../../Helpers/getPokemon";

const apiURL = `https://pokeapi.co/api/v2/pokemon/`;

const SinglePokemon = ({pokeID}) => {

    const [pokeInfo, setPokeInfo] = useState();

    useEffect(()=>{
        (async () => {
            const pokeData = await getPokemon(`${apiURL}${pokeID}`);
            console.log(pokeData);
            setPokeInfo(pokeData);
        })();
    }, [pokeID]);

    return(
        <Card 
        variant="outlined"
        className="singleCard"
        >
            {
                pokeID !== 0 ?
                <div className="singleCard__data">
                    <h2>{`#${pokeInfo?.id} - ${pokeInfo?.species?.name}`}</h2>
                </div>
                : 
                <div className="defaultSingleCard">
                    <h2>Selecciona un Pokemon</h2>
                    <img src="https://gifimage.net/wp-content/uploads/2017/08/pokeball-gif-9.gif" alt="loading" />
                </div>
            }
        </Card>
    );
}

export default SinglePokemon

