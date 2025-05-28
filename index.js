// Exercise 1

const sayHelloRadness = () => "Hello, Radness";

console.log(sayHelloRadness());

// Exercise 2

const numbers = [3, 234, 7, 23, 76];

const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

console.log(sumArray(numbers));

// Exercise 3

// Example code given
// const Animal = function(animal, sound, delay) {
//   this.animal = animal;
//   this.sound = sound;
//   this.delay = delay;
// }

// Animal.prototype.greet = function() {
//   setTimeout(function() {
//     console.log(`Hi, I am a ${this.animal}...${this.sound}`);
//   }.bind(this), this.delay);
// };

// const dog = new Animal('Dog', 'Bark', 3000);
// const cat = new Animal('Cat', 'Meow', 200);
// dog.greet();
// cat.greet();
// End of example code

const dogTwo = (animal, sound, delay) => ({
  animal,
  sound,
  delay,
  greet() {
    setTimeout(() => {
      console.log(`Hi, I am a ${this.animal}...${this.sound}`);
    }, this.delay);
  }
});

const dogInstance = dogTwo('Dog', 'Bark', 3000);
const catInstance = dogTwo('Cat', 'Meow', 200);

dogInstance.greet();
catInstance.greet();