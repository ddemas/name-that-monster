import Card from "./Card";
import { allImageIds } from "./ImageId";

export default class Deck {
    private numCardsOfEachType = 6;

    private drawDeck: Card[];
    private discardDeck: Card[];

    constructor() {
        this.drawDeck = [];
        this.discardDeck = [];
        this.resetDecks();
    }

    resetDecks() {
        this.drawDeck = [];
        this.discardDeck = [];
        let cardIdIndex = 0;

        allImageIds.forEach((id) => {
            for (let i = 0; i < this.numCardsOfEachType; i++) {
                this.drawDeck.push(new Card(cardIdIndex, id));
                cardIdIndex++;
            }
        });

        this.shuffleDrawDeck();
    }

    shuffleDrawDeck() {
        this.drawDeck.sort(() => Math.random() - 0.5);
    }

    discard(discardCard: Card) {
        const cardIndex = this.drawDeck.findIndex(card => card.equals(discardCard));
        if (cardIndex >= 0) {
            this.drawDeck.splice(cardIndex, 1);
            this.discardDeck.push(discardCard);
        } else {
            throw new Error(`Tried to discard a card that's not in the deck ${discardCard}`);
        }
    }

    getTopCard(): Card {
        return this.drawDeck[0];
    }

    getDrawDeckSize(): number {
        return this.drawDeck.length;
    }

    getDiscardSize(): number {
        return this.discardDeck.length;
    }
}