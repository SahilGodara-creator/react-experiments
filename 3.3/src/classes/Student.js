import Person from "./Person";

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am pursuing ${this.major}.`;
  }
}

export default Student;