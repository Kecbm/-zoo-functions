const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (typeof animal === 'undefined') {
    const obj = {};

    data.species.forEach((elem) => {
      obj[elem.name] = elem.residents.length;
    });
    return obj;
  }
  if (Object.keys(animal).length === 1) {
    return data.species.find((elem) => elem.name === animal.specie).residents.length;
  }
  if (Object.keys(animal).length === 2) {
    return data.species.find((elem) => elem.name === animal.specie)
      .residents.filter((elem) => elem.sex === animal.sex)
      .length;
  }
}

module.exports = countAnimals;
