"use strict";

function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  User.amount++;
}

User.amount = 0;
User.createTestUser = function () {
  return new User("Test", "Testtest", 18);
};

function UserProto() {
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

User.prototype = new UserProto();

const user = new User("Brad", "Pitt", 59);
