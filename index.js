class Hamster {
    constructor(name, owner, price = 15) {
        this.owner = owner
        this.name = name
        this.price = price
    }

    wheelRun() {
        console.log("squeak squeak")
    }

    eatFood() {
        console.log("nibble nibble")
    }

    getPrice() {
        return this.price
    }
}

class Person {
    constructor(name) {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age
    }

    getWeight() {
        return this.weight
    }

    greet() {
        console.log(`Hello ${this.name}`)
    }

    eat(times = 1) {
        this.weight += times
        this.mood += times
    }

    exercise(times = 1) {
        this.weight -= times
    }

    ageUp(years = 1) {
        this.age += years
        this.height += years
        this.weight += years
        this.mood -= years
        this.bankAccount += 10 * years
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood += 10;
        this.bankAccount -= hamster.getPrice()
    }
}

// Instantiate a new Person named Timmy
const timmy = new Person("Timmy")

// Age Timmy five years
timmy.ageUp(5)

// Timmy eats five times
timmy.eat(5)

// Timmy exercises five times
timmy.exercise(5)

// Age Timmy 9 years
timmy.ageUp(9)

// Create a hamster named "Gus"
const gus = new Hamster("Gus", "Timmy")

// Have Timmy "buy" Gus
timmy.buyHamster(gus)

// Age Timmy 15 years
timmy.ageUp(15)

// Have Timmy eat twice
timmy.eat(2)

// Have Timmy exercise twice
timmy.exercise(2)




//Chef Make Dinners
class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
}

class Chef {
    constructor() { // empty because createDinner take in the arguments

    }
    createDinner(appetizer, entree, dessert) {
        return new Dinner(appetizer, entree, dessert)
    }
}

const chef = new Chef()

const dinner1 = chef.createDinner('salad', 'steak and potatoes', 'vanilla cake')
console.log(dinner1)

const dinner2 = chef.createDinner('soup', 'chicken', 'ice cream')
console.log(dinner2)

const dinner3 = chef.createDinner('breadsticks', 'fish tacos', 'blueberry pie')
console.log(dinner3)
