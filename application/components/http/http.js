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
define(["require", "exports", 'angular2/angular2', 'http/http'], function (require, exports, angular2_1, http_1) {
    var HttpSample = (function () {
        function HttpSample(http) {
            var _this = this;
            this.result = { friends: [] };
            http.get('./friends.json').toRx().subscribe(function (res) { return _this.result = res.json(); });
        }
        HttpSample = __decorate([
            angular2_1.Component({
                selector: 'http'
            }),
            angular2_1.View({
                templateUrl: './components/http/http.html',
                directives: [angular2_1.NgFor]
            }), 
            __metadata('design:paramtypes', [http_1.Http])
        ], HttpSample);
        return HttpSample;
    })();
    exports.HttpSample = HttpSample;
});
