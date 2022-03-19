const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animais = data.species.filter((animalDoArray) => animalDoArray.name === animal)[0];

  return animais.residents.every((animalAtual) => animalAtual.age > age);
}

module.exports = getAnimalsOlderThan;
