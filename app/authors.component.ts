import {Component} from 'angular2/core'
import {AuthorService} from './authors.service'

@Component({
    selector: 'author',
    template:`
    <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'green':'gray' ">Submit</button>
    <h1>this is authors list</h1>

    <ul>
        <li *ngFor="#author of authors">
            {{author}}
        </li>
    </ul>

    <h4>Two Way Binding ie Property and Event binding </h4>
    <div class="row">
        <div class="col s6">
            <input type="text" [(ngModel)]="title"/>
            <input type="text" bindon-ngModel="title"/>
            <input type="text" [value]="title" (input)="title=$event.target.value"/>
        </div>
        <div class="col s6">
            Privew:{{title}}
        </div>
    </div>
    `,
    providers:[AuthorService]
})

export class AuthorComponent{
    title="rabin naga";
    authors;

    constructor(authorService: AuthorService){
        this.authors=authorService.getAuthors();
    }

}

