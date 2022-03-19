const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((func) => func.managers.find((elem) => elem === id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui

  if (isManager(managerId)) {
    return data.employees.filter((elem) => elem.managers.includes(managerId))
      .map((func) => `${func.firstName} ${func.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
