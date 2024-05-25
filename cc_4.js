// The purpose of this project is to extend a car class to create an electric car

// U94741303

// Create EV class extending Car with additional charge property

// Create car class
class Car {
    constructor(make, speed) {
        this.carMake = make;
        this.carSpeed = speed;
    }

    // method for acceleration
    accelerate() {
        this.carSpeed += 10;
    }

    // method for brake
    brake() {
        this.carSpeed -= 5;
    }

}

// extend car class to create EV
class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.carCharge = charge;
    }
    // Implement chargeBattery method
    chargeBattery(chargeTo) {
        this.carCharge = chargeTo;
    }

    // Override accelerate method
    accelerate() {
        this.carSpeed += 20;
        this.carCharge -= 1;
        console.log(car1.carMake + "going at " + car1.carSpeed + " km/h, with a charge of " + car1.carCharge + "%");
    }

}

// Create EV object
car1 = new EV("Tesla", 120, 23);

// Test EV object
car1.chargeBattery(50);
car1.accelerate();
car1.accelerate();
car1.brake();
console.log(car1);