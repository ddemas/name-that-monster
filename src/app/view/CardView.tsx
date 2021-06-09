import React from 'react';
import logo from '../../assets/logo.svg';
import cat from "../../assets/cat.jpg";
import { useAppSelector } from '../hooks';
import { ImageId } from "../model/ImageId";

function CardView() {
    const topCard = useAppSelector((state) => state.deck.deck.getTopCard());
    const imageState = topCard?.imageId; // useAppSelector((state) => state.card.image);
    let imageToUse;
    switch(imageState) {
        case ImageId.cat: 
            imageToUse = cat;
            break;
        case ImageId.react:
            imageToUse = logo;
            break;
        case undefined:
            imageToUse = "https://th.bing.com/th/id/OIP.FtY0KcRQY_vEdWw5v2RMkAHaGE?w=248&h=203&c=7&o=5&dpr=1.5&pid=1.7";
            break;
    }
    return (
        <div>
            <img src={imageToUse} className="App-logo" alt="logo" />
            <p>Card id: {topCard?.cardId}</p>
        </div>
    );
}

export default CardView;