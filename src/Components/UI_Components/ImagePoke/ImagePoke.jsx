import React from "react";
import './ImagePoke.scss';

const ImagePoke = ({url}) => {
    // console.log(url);
    const urlArray = url.split('/');
    // console.log(urlArray);
    const id = urlArray[urlArray.length -2];
    // console.log(id);

    return(
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="poke image" />
    );
}

export default ImagePoke;