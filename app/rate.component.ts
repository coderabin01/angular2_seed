import {Component} from 'angular2/core'

@Component({
    selector: 'rating',
    template: `
    <i class="glyphicon"
    [class.glyphicon-star]="isFav"
    [class.glyphicon-star-empty]="!isFav"
    (click)="onClick()">
    </i>   
    `
})



export class RateComponent {
    isFav=false;
    onClick() {
        this.isFav = !this.isFav;
    }
}