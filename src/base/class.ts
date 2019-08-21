import { runInContext } from "vm";

abstract class Animal {
    eat() {
        console.log('eat')
    }
    sleep() {}
}

//let animal = new Animal()




class Dog extends Animal {
    constructor(name: string) {
        super()
        this.name = name
    }
    name: string = 'dog'
    run() {}
    sleep() {
        console.log('dog sleep')
    }
    private pri() {}
    protected pro() {}
    readonly legs: number = 4
    static food: string = 'bones'
}
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)
//dog.pri()
//dog.pro()
console.log(Dog.food)
dog.eat()

class Cat extends Animal {
    sleep() {
        console.log('Cat sleep')
    }
}
let cat = new Cat()

let animals: Animal[] = [dog,cat]

animals.forEach(i => {
    i.sleep()
})

class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}

new WorkFlow().step1().step2()

class Myflow extends WorkFlow {
    next() {
        return this;
    }
}
new Myflow().next().step1().next().step2()



class Husky extends Dog {
    constructor (name: string,public color: string) {
        super(name)
        this.color = color;
        //this.pri()
        this.pro()
    }
    //color: string
}
console.log(Husky.food)



