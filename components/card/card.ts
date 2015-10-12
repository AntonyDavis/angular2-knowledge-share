import {Component, View, NgFor} from 'angular2/angular2';

@Component({
    selector: 'card'
})

@View({
    templateUrl: './components/card/card.html',
    directives: [NgFor]
})

export class Card {   

    cards = [
        {name: 'Queen of Hearts', flipped: false},
        {name: 'Jack of Spades', flipped: false},
        {name: 'Ace of Clubs', flipped: false}
    ];   

    flipCard(cardName) {
         for (var i = 0; i<this.cards.length; i++) {
             if (cardName === this.cards[i].name) {
                 return this.cards[i].flipped = !this.cards[i].flipped;
             }    
         }        
    }
}