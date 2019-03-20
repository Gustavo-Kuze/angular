class Spacecraft1 {
    propulsor: string
    
    constructor(propulsor: string) {
        this.propulsor = propulsor
    }
}

// Essa é a maneira mais enxuta de escrever a mesma classe
class Spacecraft2 {
    constructor(public propulsor: string) {}
    jumpIntoHyperspace() {
        console.log("Jumping into hyperspace")
    }
}

import Containership from './interfaces'

class MillenniumFalcon extends Spacecraft2 implements Containership{
    cargoContainers: number;
    constructor() {
        super("hyperspace");
    }

    jumpIntoHyperspace() {
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }else{
            console.log("Failed")
        }
    }
}