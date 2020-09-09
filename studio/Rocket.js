"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var i = items_1[_i];
            sum += i.massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var overallSum = 0;
        for (var _i = 0, _a = this.astronauts; _i < _a.length; _i++) {
            var a = _a[_i];
            overallSum += a.massKg;
        }
        for (var _b = 0, _c = this.cargoItems; _b < _c.length; _b++) {
            var c = _c[_b];
            overallSum += c.massKg;
        }
        return overallSum;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (a) {
        if (this.canAdd(a)) {
            this.astronauts.push(a);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
