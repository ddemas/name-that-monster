import React from 'react';
import logo from '../../assets/logo.svg';
import cat from "../../assets/cat.jpg";
import { useAppSelector } from '../hooks';
import { ImageId } from './cardSlice';

function Card() {
    const imageState = useAppSelector((state) => state.card.image);
    let imageToUse;
    switch(imageState) {
        case ImageId.cat: 
            imageToUse = cat;
            break;
        case ImageId.react:
            imageToUse = logo;
            break;
    }
    return <img src={imageToUse} className="App-logo" alt="logo" />;
}

export default Card;