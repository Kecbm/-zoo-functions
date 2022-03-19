const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids === 'undefined') {
    return [];
  }

  const array = data.species;
  const arrayEspecies = ids.map((animal) => array.find((animalDoId) => animalDoId.id === animal));
  return arrayEspecies;
}

module.exports = getSpeciesByIds;
