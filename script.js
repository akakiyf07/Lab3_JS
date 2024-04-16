let car1 = new Object();
let car2 = new Object();

car1.color = "Yellow";
car1.MaxSpeed = 180;
car1.driver = new Object()
car1.driver.name = "Random Randomovuch";
car1.driver.category = "C";
car1.driver.personalLimitations= "No driving at night";
car1.tuning = true;
car1.numberOfAccidents = 0;
car1.drive = function() {
    console.log("I ain`t driving at night")
}

car2.color = "Blue";
car2.maxSpeed = 230;
car2.driver = {
    name : "Bubr Bubrovuch",
    category: "B",
    personalLimitations: null
};
car2.tuning = false;
car2.numberOfAccidents = 2;
car2.drive = function() {
    console.log("I can drive anytime")
}

function Truck(color,weight,avgSpeed,brand,model){
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.AssignDriver= function(name,nightDriving,experience){
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience : experience
    }
}

Truck.prototype.trip = function (nightDriving, experience){
    if (!this.driver){
        console.log("No driver assigned");
        return;
    }
}

Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
        return;
    }
    let drivingStatus = this.driver.nightDriving ? "drives at night" : "does not drive at night";
    console.log(`Driver ${this.driver.name} ${drivingStatus} and has ${this.driver.experience} years of experience.`);
};

let truck1 = new Truck("Pink",15000,130,"Scania","R");
let truck2 = new Truck("Green", 13000, 135,"DAF","XF" )

truck1.AssignDriver("Vladyslav Shablovksyi", true, 5);
truck2.AssignDriver("Bobr Bobrovskyi", false, 7);

truck1.trip();
truck2.trip();


class Square{
    constructor(a) {
        this.a = a;
    }
    length(){
        let perimeter = 4 * this.a;
        console.log(`The perimeter is : ${perimeter}`);

    }
    square(){
        let square = this.a*this.a;
        console.log(`The square is : ${square}`);
    }
    info() {
        console.log("Square:");
        console.log("- Side length:", this.a);
        console.log("- Perimeter:", this.a * 4);
        console.log("- Area:", this.a * this.a);
    }
    static help() {
        console.log("This is a Square class.");
    }
}

class Rectangle extends Square{
    constructor(a,b) {
        super();
        this._a=a;
        this._b=b;
    }
    get a(){
        return this._a;
    }
    set a(value){
        this._a = value;
    }
    get b(){
        return this._b;
    }
    set b(value){
        this._b = value;
    }

    length() {
        let perimeter = 2 * (this.a + this.b);
        return perimeter
    }

    info() {
        console.log("Rectangle:");
        console.log("- Length:", this.a);
        console.log("- Width:", this.b);
        console.log("- Perimeter:", 2 * (this.a + this.b));
        console.log("- Area:", this.a * this.b);
    }
    static help() {
        console.log("This is a Rectangle class.");
    }
}

class Rhombus extends Square{
    constructor(a,alpha,beta) {
        super(a)
        this.alpha = alpha;
        this.beta = beta;
    }
    length() {
        let perimeter = 4 * this.a;
        return perimeter;
    }

    square() {
        let area = this.a * this.a * Math.sin(this.alpha * Math.PI / 180);
        return area;
    }
    info() {
        console.log("Rhombus:");
        console.log("- Side length:", this.a);
        console.log("- Obtuse angle (alpha):", this.alpha, "degrees");
        console.log("- Acute angle (beta):", this.beta, "degrees");
    }
    static help() {
        console.log("This is a Rhombus class.");
    }
}

class Parallelogram extends Rhombus{
    constructor(a,b,alpha,beta) {
        super(a);
        this.b=b;
        this.alpha = alpha;
        this.beta = beta;
    }
    length() {
        let perimeter = 2 * (this.a + this.b);
        return perimeter;
    }
    square() {
        let area = this.a * Math.sin(this.alpha * Math.PI / 180) * this.b; // Площа паралелограма
        return area;
    }
    info() {
        console.log("Parallelogram:");
        console.log("- Side a length:", this.a);
        console.log("- Side b length:", this.b);
        console.log("- Obtuse angle (alpha):", this.alpha, "degrees");
        console.log("- Acute angle (beta):", this.beta, "degrees");
    }
    static help() {
        console.log("This is a Parallelogram class.");
    }
}


let square1 = new Square(5);
let rectangle1 = new Rectangle(6, 4);
let rhombus1 = new Rhombus(9,130,50)
let parallelogram1 = new Parallelogram(6,9,100,80)

let squareObj = new Square(8);
let rectangleObj = new Rectangle(3, 5);
let rhombusObj = new Rhombus(7, 100, 80);
let parallelogramObj = new Parallelogram(5, 7, 100, 80);

squareObj.info();
rectangleObj.info();
rhombusObj.info();
parallelogramObj.info();

console.log();
square1.info();
Square.help();
console.log();

rectangle1.a = 10;
rectangle1.b = 5;

rectangle1.info();
Rectangle.help();
console.log();

rhombus1.info();
Rhombus.help();
console.log();

parallelogram1.info();
Parallelogram.help();
console.log();


function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

let { a: a1, b: b1, c: c1 } = Triangular(3, 4, 5);
let { a: a2, b: b2, c: c2 } = Triangular(6, 8, 10)
let { a: a3, b: b3, c: c3} = Triangular();

console.log("Triangle 1:", { a: a1, b: b1, c: c1 });
console.log("Triangle 2:", { a: a2, b: b2, c: c2 });
console.log("Triangle 1:", { a: a3, b: b3, c: c3 });
console.log()

function PiMultiplier(number){
    return function (){
        return Math.PI * number;
    };
}

let multiplyBy2Pi = PiMultiplier( 2);
let divideBy2_3Pi = PiMultiplier(2 / 3);
let divideBy2Pi = PiMultiplier(1 / 2);
console.log(multiplyBy2Pi());
console.log(divideBy2_3Pi());
console.log(divideBy2Pi());
console.log()

function Painter(color){
    return function (object){
        if (object && object.type !== undefined){
            console.log(`Color: ${color}, Type: ${object.type}`);
        } else {
            console.log("No 'Type' property occurred!")
        }
    }
}

let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow")

let object1 = {maxSpeed:280,type:"Sportcar",color:"magenta"};
let object2 = {type:"Truck",avgSpeed:90,load_capacity:2400};
let object3 = {maxSpeed:180,color:"purple",isCar:true};

PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);

