const {
  curry,
  map,
  prop,
  range
} = require('ramda');
const { generateClub } = require('basket-simulation-club');
const { generateId } = require('basket-simulation-utils');

function generateChampionship(style, level, nbClubs = 10) {
  const clubsForChamp = map(generateClub, range(0, nbClubs));

  return [{
    style,
    level,
    id: generateId(),
    clubs: map(cur => prop('id'), clubsForChamp)
  }, clubsForChamp];
}

exports.generateChampionship = curry(generateChampionship);
