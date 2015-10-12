import {Directive, View} from 'angular2/angular2';

@Directive({
    selector: '[red]' // a CSS attribute selector
})

@View({
    templateUrl: './components/red/red.html'    
})

export class Red { 
    constructor(el:HTMLScriptElement) {
        el.style.color = 'red';   
    }    
        
}