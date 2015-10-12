// THIS BRINGS IN  THE TYPINGS THAT YOU DOWNLOADED
/// <reference path="typings/angular2/angular2.d.ts" />
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
define(["require", "exports", 'http/http', 'angular2/angular2', './demo-page', './components/about/about', 'angular2/router', 'angular2/router'], function (require, exports, http_1, angular2_1, demo_page_1, about_1, router_1, router_2) {
    // the above are all ES6 modules loaded by System.js. Each one of them will have been exported.
    var MyDemoApp = (function () {
        function MyDemoApp(router, location) {
            this.router = router;
            this.location = location;
        }
        MyDemoApp.prototype.getLinkStyle = function (path) {
            return this.location.path() === path;
        };
        MyDemoApp = __decorate([
            angular2_1.Component({
                /*
                 Restrict: E - a css selector that will look for a <demoapp> element
                 
                 To write a DecoratorDirective, i.e. Restrict: A, use selector: '[demo-app]'. This is a CCS attribute selector binding to the attribute instead
                 You also, in the case of DecoratorDirectives, should bind: {'demoApp': 'demoApp'}. It maps properties in your class to an HTML attr, and thus acts as a public API
                 You can also observe: {'demoApp': 'demoAppChanged'} changes to a custom event that you can then define as callback in your class, demoAppChanged() {...}
                 Like this, you no longer need to set up watches. Much more declarative, the Framework does everything for you.
                */
                selector: 'demo-app'
            }),
            angular2_1.View({
                templateUrl: './demo-app.html',
                directives: [demo_page_1.DemoPage, router_2.RouterLink, router_2.RouterOutlet, about_1.About] // Dependency Injection, per component registry, no more global registry
            }),
            router_2.RouteConfig([
                { path: '/', component: demo_page_1.DemoPage, as: 'home' },
                { path: '/about/:id', component: about_1.About, as: 'about' }
            ]), 
            __metadata('design:paramtypes', [router_2.Router, router_2.Location])
        ], MyDemoApp);
        return MyDemoApp;
    })();
    angular2_1.bootstrap(MyDemoApp, [http_1.HTTP_BINDINGS, router_1.ROUTER_BINDINGS, angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)]); // bootstrap this application
});
