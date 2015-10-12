// THIS BRINGS IN  THE TYPINGS THAT YOU DOWNLOADED
/// <reference path="typings/angular2/angular2.d.ts" />

// IMPORT ALL THE DECLARED NAMESPACES ( EXPORTED MODULES)
import {HTTP_BINDINGS} from 'http/http';
import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {DemoPage} from './demo-page';
import {About} from './components/about/about';
import {ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {RouterLink, RouteConfig, Router, RouterOutlet, Location, RouteParams} from 'angular2/router';

// the above are all ES6 modules loaded by System.js. Each one of them will have been exported.

@Component({
   /*
    Restrict: E - a css selector that will look for a <demoapp> element
    
    To write a DecoratorDirective, i.e. Restrict: A, use selector: '[demo-app]'. This is a CCS attribute selector binding to the attribute instead
    You also, in the case of DecoratorDirectives, should bind: {'demoApp': 'demoApp'}. It maps properties in your class to an HTML attr, and thus acts as a public API
    You can also observe: {'demoApp': 'demoAppChanged'} changes to a custom event that you can then define as callback in your class, demoAppChanged() {...}
    Like this, you no longer need to set up watches. Much more declarative, the Framework does everything for you.
   */
   selector: 'demo-app'
})

@View({
    templateUrl: './demo-app.html',
    directives:[DemoPage, RouterLink, RouterOutlet, About] // Dependency Injection, per component registry, no more global registry
})

@RouteConfig([
    {path: '/', component: DemoPage, as: 'home'},
    {path: '/about/:id', component: About, as: 'about'}
])
 
/*
    the execution context or binding context for the template so there is no scope, like the ControllerAs syntax.
    
    You bind directly to instances of this class so no need for a complicated scope hierarchy.
    
    The class name and the component's root element do not need to be the same
*/
class MyDemoApp {

    router: Router;
    location: Location;

    constructor(router: Router, location: Location) { // you can also use the constructor to get access to your element, much like you do in the old-style link: function
        this.router = router;
        this.location = location;
    }

    getLinkStyle(path) {
        return this.location.path() === path;
    }
}

bootstrap(MyDemoApp,[HTTP_BINDINGS,ROUTER_BINDINGS, bind(LocationStrategy).toClass(HashLocationStrategy)]); // bootstrap this application
