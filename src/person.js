// var Dog = require("./dog.js");

class Person {
  constructor(personName, dog) {
    this.name = personName;
    this.dog = dog;
  }

  fillFoodBowl() {
    this.dog.eat();
  }

  throwBall() {
    if(this.dog.fetchBall() === `This is fun!`) {
      return `${this.dog.name} loves playing fetch!`;
    } else {
      return `Oh, I think ${this.dog.name} is too tired. I guess we won\'t play fetch right now.`
    }
  }

}

module.exports = Person;
