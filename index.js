const R = require('ramda');
const { generateId } = require('basket-simulation-utils');
const { generateClub } = require('basket-simulation-club');

function generateChampionship(style, level, nbClubs = 10) {
  const clubsForChamp = R.map(generateClub, R.range(0, nbClubs));

  return [{
    style,
    level,
    id: generateId(),
    clubs: R.map(R.prop('id'), clubsForChamp)
  }, clubsForChamp];
}

exports.generateChampionship = generateChampionship;
