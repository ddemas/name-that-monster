import { ImageId } from "./ImageId";

export default class Card {
    constructor(public cardId: number, public imageId: ImageId) {}

    equals(card: Card) {
        return card.cardId === this.cardId;
    }
}