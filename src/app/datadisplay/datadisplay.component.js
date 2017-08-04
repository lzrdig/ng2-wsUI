"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//declare var require: any;
//const data: any = require('../assets/data/chartdata.json');
var smpldata = { "LineWithArea": {
        "labels": [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8
        ],
        "series": [
            [
                5,
                9,
                7,
                8,
                5,
                3,
                5,
                4
            ]
        ],
        borderwidth: 10
    }
};
var DataDisplayComponent = (function () {
    function DataDisplayComponent() {
        this.chart = {
            type: 'Line',
            data: smpldata['LineWithArea'],
            options: {
                low: 1,
                showArea: false
            }
        };
    }
    DataDisplayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'datadisplay',
            templateUrl: './datadisplay.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], DataDisplayComponent);
    return DataDisplayComponent;
}());
exports.DataDisplayComponent = DataDisplayComponent;
//# sourceMappingURL=datadisplay.component.js.map