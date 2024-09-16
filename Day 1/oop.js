// // let person = {
// //     name : "Steve",
// //     age : 37,
// //     job : "Software Dev"
// // }
// // console.log(person.age)
// // console.log(person["age"])

// ////////////////////
// class Person {
//     // the class key word will allow us to create a template
//     constructor(name,age,job){
//         // properties for each new instance of the class
//         this.name = name
//         this.age = age
//         this.job = job
//     }
//     talks() {
//         console.log(`Hi my name is ${this.name}, I am ${this.age} and I work as a ${this.job}`)

//     }
//     work(){
//         console.log(`I enjoy my job as a ${this.job}`)
//     }
// }

// const dave = new Person("Dave", 41 , "Builder")
// dave.talks()
// dave.work()

// const alice = new Person("Alice", 28 , "Software Dev")
// alice.talks()
// alice.work()


class Animal {
    constructor(name){
        this.name = name
        this.health = 100
        this.hunger = 100
    }
    drinks(){
        this.health += 5
        return this
    }
    eats() {
        this.health += 5
        this.hunger += 10
        console.log(`${this.name}'s health is ${this.health}`)
        return this
    }
    stats(){
        return console.table({
            name: this.name,
            health: this.health
        })
    }
}

class Dog extends Animal{
    constructor(name,happy){
        super(name,happy) // super keyword runs the constructor from the parent class to set
                        // up the properties for the new class
        this.happy = happy
    }
    playBall() {
        this.health += 10
        this.hunger -= 10
        console.log(`${this.name} is happy`)
        return this
    }
    walks() {
        console.log(`Taking ${this.name} for a walk, they are ${this.happy}`)
        this.health += 10
        return this
    }
}

class Cat extends Animal {
    constructor(name, content){
        super(name,content)
        this.content = content
    }

    playWool() {
        this.health += 10
        this.hunger -= 10
        console.log(`${this.name} is happy`)
        return this
    }
    naps(){
        console.log(`${this.name} is taking a nap they are${this.content}`)
        this.health += 10
        return this
    }
}



const stanley = new Dog("Stanley", "Wags Tail")
stanley.drinks().eats().playBall().walks()
stanley.stats()

const keith = new Cat("Keith", "Purrs")
keith.drinks().eats().playWool().naps()
keith.stats()













