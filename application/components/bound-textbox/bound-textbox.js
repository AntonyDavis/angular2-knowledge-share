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
    var BoundTextbox = (function () {
        function BoundTextbox() {
            this.text = 'hello';
        }
        BoundTextbox.prototype.typing = function ($event) {
            this.text = $event.target.value;
        };
        BoundTextbox = __decorate([
            angular2_1.Component({
                selector: 'bound-textbox'
            }),
            angular2_1.View({
                template: '<input [value]="text" (keyup)="typing($event)" />{{text}}'
            }), 
            __metadata('design:paramtypes', [])
        ], BoundTextbox);
        return BoundTextbox;
    })();
    exports.BoundTextbox = BoundTextbox;
});
