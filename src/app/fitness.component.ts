import { Component } from '@angular/core';

@Component({
    selector : 'app-fitness',
    template : `
                <p>
                {{title | uppercase}} <br>
                {{price | currency:'INR':true:'2.2-2'}} <br>
                {{rating | number : '2.1-1'}} <br>
                {{date | date:'short'}} <br>
                {{text |  upp}}
                </p>
                `
})
export class FitnessComponent {

    constructor(){

    }

    
        title = 'cross fitness training';
        price = 3000;
        rating = 4.897;
        date = new Date(2016, 10, 1);
        text = "Security tightened in Rohtak, Panchkula, Sirsa, Gurgaon; security personnel authorised to open fire at nefarious elements.";
    
}