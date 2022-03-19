const data = require('../data/zoo_data');

function funcionarioTrue(func) {
  return data.employees.find((elem) => elem.firstName === func.name
    || elem.lastName === func.name
    || elem.id === func.id);
}

function getInfo(func) {
  const obj = {
    id: '',
    fullName: '',
    species: [''],
    locations: [''],
  };
  data.employees.forEach((elem) => {
    if (elem.firstName === func.name || elem.lastName === func.name
      || elem.id === func.id) {
      obj.id = elem.id;
      obj.fullName = `${elem.firstName} ${elem.lastName}`;
      obj.species = data.species.filter((spe) => elem.responsibleFor
        .includes(spe.id)).map((spe) => spe.name);
      obj.locations = data.species.filter((spe) => elem.responsibleFor
        .includes(spe.id)).map((spe) => spe.location);
    }
  });
  return obj;
}

function allEmployess(param) {
  return param.reduce((acc, elem) => {
    acc.push(getInfo(elem));
    return acc;
  }, []);
}

function getEmployeesCoverage(func) {
  // seu código aqui
  if (typeof func === 'undefined') {
    return allEmployess(data.employees);
  }

  if (funcionarioTrue(func)) {
    return getInfo(func);
  }

  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
