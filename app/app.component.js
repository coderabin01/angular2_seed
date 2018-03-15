System.register(['angular2/core', './course.component', './rate.component', './albums.component', './authors.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, course_component_1, rate_component_1, albums_component_1, authors_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_component_1_1) {
                course_component_1 = course_component_1_1;
            },
            function (rate_component_1_1) {
                rate_component_1 = rate_component_1_1;
            },
            function (albums_component_1_1) {
                albums_component_1 = albums_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.isActive = false;
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/homepage', name: 'Homepage', component: authors_component_1.AuthorComponent, useAsDefault: true },
                        { path: '/user', name: 'User', component: course_component_1.CourseComponent },
                        { path: '/storageSpot', name: 'StorageSpot', component: albums_component_1.AlbumsComponent },
                        { path: '/mySlate', name: 'MySlate', component: albums_component_1.AlbumsComponent }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/nav.component.html',
                        directives: [authors_component_1.AuthorComponent, router_1.ROUTER_DIRECTIVES, course_component_1.CourseComponent, rate_component_1.RateComponent, albums_component_1.AlbumsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map