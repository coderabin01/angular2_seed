import {Component} from 'angular2/core'
import {RateComponent} from './rate.component'
import {CourseService} from './course.service'
@Component({
    selector: 'course',
    template: `
        <br>
        {{title}}
        <h1> Courses </h1>
        <ul>
        <li *ngFor="#course of courses">
            {{course}}<rating></rating>
        </li>

       </ul>
    `,
    directives: [RateComponent],
    providers: [CourseService]
})


export class CourseComponent {
 title="this is my first app using components,service, dependency injection";
 courses;

constructor(courseService: CourseService){
    this.courses= courseService.getCourses();
}
}