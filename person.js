export class Person {
    constructor(profession, age) {
        this.profession = profession
        this.age = age
    }
    introduce() {
        return `Hi, I'm ${this.profession} and I'm ${this.age} years old.`
    }
}



