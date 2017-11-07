const R = require('ramda');
const { generateClub } = require('basket-simulation-club');

function generateChampionship(style, level, nbClubs = 10) {
  const clubsForChamp = R.map(generateClub, R.range(0, nbClubs));

  return [{
    style,
    level,
    clubs: []
  }, clubsForChamp];
}

exports.generateChampionship = generateChampionship;
