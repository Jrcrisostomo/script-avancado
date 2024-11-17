/*
    CLASSES
*/

//const person = {
//  name:"junior",
//  age: 35,
//  talk: function() {
//      console.console.log(`Hello, my name is ${this.name}`);       
//  }
//}


class Person{
    constructor(name, age){
        console.log(`Hello, I'm ${name}`)

        this.name = name
        this.age = age
    }
    

    talk(){
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person("junior, 35")
const newPerson1 = new Person("Maria", 30)
const newPerson2 = new Person("Lara", 28)

newPerson.talk()
newPerson.talk()
newPerson.talk()

newPerson.talk()