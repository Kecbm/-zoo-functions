const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((elem) => {
    if (elem.age < 18) {
      obj.child += 1;
    } else if (elem.age >= 18 && elem.age < 50) {
      obj.adult += 1;
    } else if (elem.age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
}

function calculaPreco(entrants) {
  const { prices } = data;
  let preco = 0;

  Object.entries(countEntrants(entrants)).forEach((elem) => {
    if (elem[0] === 'child') {
      preco += (prices.child * elem[1]);
    } else if (elem[0] === 'adult') {
      preco += (prices.adult * elem[1]);
    } else if (elem[0] === 'senior') {
      preco += (prices.senior * elem[1]);
    }
  });
  return preco;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }
  return calculaPreco(entrants);
}

module.exports = { calculateEntry, countEntrants };
