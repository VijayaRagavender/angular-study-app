"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var FitnessComponent = (function () {
    function FitnessComponent() {
        this.title = 'cross fitness training';
        this.price = 3000;
        this.rating = 4.897;
        this.date = new Date(2016, 10, 1);
    }
    FitnessComponent = __decorate([
        core_1.Component({
            selector: 'app-fitness',
            template: "\n                <p>\n                {{title}} <br>\n                {{price}} <br>\n                {{rating}} <br>\n                {{date}} <br>\n                </p>\n                "
        })
    ], FitnessComponent);
    return FitnessComponent;
}());
exports.FitnessComponent = FitnessComponent;
