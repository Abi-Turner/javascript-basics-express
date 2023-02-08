const { arrayToCSVString } = require("./arrays");

const createPerson = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (typeof object[property] !== 'undefined') {
    return true;
  }
  return false;
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  } return false;
};

const getAges = people => people.map(person => person.age);

const findByName = (name, people) => people.find(obj => obj.name === name);

const findHondas = cars => cars.filter(obj => obj.manufacturer === 'Honda');

const averageAge = people => {
  const totalAge = people.reduce((prevAge, currentPerson) => {
    return prevAge + currentPerson.age;
  }, 0);
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
