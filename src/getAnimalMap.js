const data = require('../data/zoo_data');

const { species } = data;

function nomeDasEspecies(specie, sex, sorted) {
  let arrNomes;
  const { residents } = specie;

  if (sex) {
    arrNomes = residents.filter((animal) => animal.sex === sex)
      .map((animal) => animal.name);
  } else {
    arrNomes = residents.map((animal) => animal.name);
  }

  if (sorted) {
    arrNomes.sort();
  }

  return arrNomes;
}

function getAnimalMap({ includeNames, sex, sorted } = {}) {
  const localizacaoDosAnimais = species
    .reduce((acc, specie) => ({ ...acc, [specie.location]: [] }), {});

  if (!includeNames) {
    species.forEach((specie) => localizacaoDosAnimais[specie.location].push(specie.name));
    return localizacaoDosAnimais;
  }

  species.forEach((specie) => {
    const nomeDosAnimais = nomeDasEspecies(specie, sex, sorted);
    localizacaoDosAnimais[specie.location].push({ [specie.name]: nomeDosAnimais });
  });

  return localizacaoDosAnimais;
}

module.exports = getAnimalMap;
