var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var Card = (function () {
        function Card() {
            this.cards = [
                { name: 'Queen of Hearts', flipped: false },
                { name: 'Jack of Spades', flipped: false },
                { name: 'Ace of Clubs', flipped: false }
            ];
        }
        Card.prototype.flipCard = function (cardName) {
            for (var i = 0; i < this.cards.length; i++) {
                if (cardName === this.cards[i].name) {
                    return this.cards[i].flipped = !this.cards[i].flipped;
                }
            }
        };
        Card = __decorate([
            angular2_1.Component({
                selector: 'card'
            }),
            angular2_1.View({
                templateUrl: './components/card/card.html',
                directives: [angular2_1.NgFor]
            }), 
            __metadata('design:paramtypes', [])
        ], Card);
        return Card;
    })();
    exports.Card = Card;
});
