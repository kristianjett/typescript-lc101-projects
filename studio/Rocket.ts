import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let sum: number = 0;
        for (let i of items){
            sum += i.massKg;
        }

        return sum;
    }

    currentMassKg(): number {
        let overallSum: number = 0;
        for (let a of this.astronauts){
            overallSum += a.massKg;
        }
        for (let c of this.cargoItems){
            overallSum += c.massKg;
        }

        return overallSum;
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(a: Astronaut): boolean {
        if(this.canAdd(a)){
            this.astronauts.push(a);
            return true;
        } else {
            return false;
        }
    }
}