"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CoursesComponent = (function () {
    function CoursesComponent(service) {
        this.title = "List of Courses - interpolation";
        this.imageUrl = "http://www.cartoonson.com/_resources/Cartoons/show/12/image/555x418/Tom-and-Jerry-classic.jpg";
        this.colspan = 2;
        this.isActive = true;
        this.email = "vijayaR@test.com";
        this.courses = service.display();
    }
    CoursesComponent.prototype.onKeyUp = function () {
        console.log(this.email);
    };
    CoursesComponent.prototype.onDivClicked1 = function () {
        console.log('Div Button1 was clicked');
    };
    CoursesComponent.prototype.btnClick = function () {
        console.log('Button1 was clicked');
    };
    CoursesComponent.prototype.onDivClicked = function () {
        console.log('Div Button was clicked');
    };
    CoursesComponent.prototype.onSave = function ($event) {
        $event.stopPropagation();
        console.log('Button was clicked', $event);
    };
    CoursesComponent.prototype.display = function () {
        return this.courses;
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "\n            <h2>{{ title }}<h2>\n            <ul>\n                 <li *ngFor = \"let course of courses\">\n                      {{course}}\n                 </li>\n            </ul>\n            <img [src] = \"imageUrl\">\n            <table>\n                <tr>\n                    <td [attr.colspan] = \"colspan\"></td>\n                </tr>\n            </table>\n            <div (click)=\"onDivClicked1()\">\n            <div (click)=\"onDivClicked()\">\n            <button (click)=\"btnClick()\"></button>\n            <button class=\"btn btn-primary\" [class.active]=\"isActive\" \n            [style.background]=\"isActive ? 'blue' : 'white'\" (click)=\"onSave($event)\">\n            Save</button>\n            <input [(ngModel)] =\"email\" (keyup.enter) =\"onKeyUp()\"/>\n            </div>\n            </div>\n             "
        })
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//let course = new CoursesComponent(new CoursesService);
//console.log(course.display());
