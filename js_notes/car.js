class Car {
    #brand;  // private
    #model; 
    speed = 0; // cannot be private because RaceCar (children) have no access to it
    // There is no protected in JS
    
    isTrunkOpen = false; 
    constructor(brand, model) {
        this.#brand = brand;
        this.#model = model; 
    }
    displayInfo() {
        console.log(`
            ${this.#brand}, ${this.#model}
            Speed: ${this.speed} km/h
            isTrunkOpen: ${this.isTrunkOpen}
        `); 
    }

    go() {
        if (!this.isTrunkOpen && this.speed <= 195) this.speed += 5; 
    }
    brake() {
        if (this.speed >= 5) this.speed -= 5; 
    }
    openTrunk() {
        if (!this.speed) this.isTrunkOpen = true;
    }
    closeTrunk() {
        this.isTrunkOpen = false; 
    }
}

const car1 = new Car('Toyota', 'Corolla'); 
const car2 = new Car('Tesla', 'Model 3'); 

car1.go();
car1.go(); 

car1.displayInfo();
car2.displayInfo();


class RaceCar extends Car {
    acceleration; 
    constructor(brand, model, acceleration) {
        super(brand, model); 
        this.acceleration = acceleration; 
    }

    go() {
        if (this.speed <= 300 - this.acceleration) this.speed += this.acceleration; 
    }
    openTrunk() {
    }
    closeTrunk() {
        this.isTrunkOpen = false; 
    }
}

const raceCar1 = new RaceCar('McLaren', 'F1', 20); 
raceCar1.go();
raceCar1.displayInfo();
