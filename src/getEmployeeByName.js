const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const arr = data.employees;

  const newArr = arr.find((obj) => obj.firstName === employeeName || obj.lastName === employeeName);

  return newArr || {};
}

module.exports = getEmployeeByName;
