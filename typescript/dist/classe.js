"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Spacecraft1 = /** @class */ (function () {
    function Spacecraft1(propulsor) {
        this.propulsor = propulsor;
    }
    return Spacecraft1;
}());
// Essa é a maneira mais enxuta de escrever a mesma classe
var Spacecraft2 = /** @class */ (function () {
    function Spacecraft2(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft2.prototype.jumpIntoHyperspace = function () {
        console.log("Jumping into hyperspace");
    };
    return Spacecraft2;
}());
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        return _super.call(this, "hyperspace") || this;
    }
    MillenniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log("Failed");
        }
    };
    return MillenniumFalcon;
}(Spacecraft2));
