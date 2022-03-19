const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const primeiroAnimal = data.employees.find((elem) => elem.id === id).responsibleFor[0];

  const animalMaisVelho = data.species.find((elem) => elem.id === primeiroAnimal).residents
    .sort((a, b) => (b.age - a.age))[0];

  return Object.values(animalMaisVelho);
}

module.exports = getOldestFromFirstSpecies;
