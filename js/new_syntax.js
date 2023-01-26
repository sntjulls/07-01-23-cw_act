class User {
  #lastName;
  constructor(firstName, lastName, age, isMale = true) {
    if (typeof firstName !== "string") {
      throw new TypeError("first name must be string!");
    }
    if (typeof lastName !== "string") {
      throw new TypeError("first name must be string!");
    }
    if (typeof age !== "number") {
      throw new TypeError("first name must be string!");
    }
    if (age < 0 || age > 150) {
      throw new RangeError("error: age<0 or age>150");
    }
    if (typeof isMale !== "boolean") {
      throw new TypeError("first name must be string!");
    }
    this.firstName = firstName;
    this.#lastName = lastName;
    this.age = age;
    this.isMale = isMale;
  }
  getFullName() {
    return `${this.firstName} ${this.#lastName}`;
  }
  toString() {
    return this.firstName;
  }
}

try {
  const user3 = new User(45, 45, "qwerty");
  user3.#lastName = null;
  console.log(user3.getFullName());
} catch (error) {
  console.log(error);
}

console.log("important info!");

const user2 = new User("Tom", "Rot", 59);
const user3 = new User("Neo", "Neo", 28);

class Worker {
  constructor(surname, dailySalary, workingDays = 0) {
    this.surname = surname;
    this.dailySalary = dailySalary;
    this.workingDays = workingDays;
  }
  getSalary(number) {
    return this.dailySalary * this.workingDays;
  }
}

const worker1 = new Worker("Pitt", 25, 3);

console.log(worker1.getSalary());
