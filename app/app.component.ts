import {Component} from 'angular2/core'
import {CourseComponent} from './course.component'
import {RateComponent} from './rate.component'
import {AlbumsComponent} from './albums.component'
import {AuthorComponent} from './authors.component'
import  {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'


@RouteConfig([
    { path: '/homepage', name: 'Homepage', component: AuthorComponent, useAsDefault:true},
    { path: '/user', name: 'User', component: CourseComponent},
    { path: '/storageSpot', name: 'StorageSpot', component: AlbumsComponent},
    { path: '/mySlate', name: 'MySlate', component: AlbumsComponent}
])



@Component({
    selector: 'my-app',
    templateUrl: 'app/nav.component.html',
    directives: [AuthorComponent, ROUTER_DIRECTIVES,CourseComponent, RateComponent,AlbumsComponent]

})


export class AppComponent {
    isActive = false;
 }