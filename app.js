const movies = [
  {
    title: 'Amadeus',
    score: 99,
    year: 1984
  },
  {
    title:  'Sharknado',
    score: 35,
    year: 2013
  },
  {
    title: '13 Going On 30',
    score: 70,
    year: 2004
  },
  {
    title: 'Stand By Me',
    score: 85,
    year: 1986
  },
  {
    title: 'Waterworld',
    score: 62,
    year: 1995
  },
  {
    title: 'Jingle All The Way',
    score: 71,
    year: 1996
  },
  {
    title: 'Parasite',
    score: 95,
    year: 2019
  },
  {
    title: 'Nothing Hill',
    score: 77,
    year: 1999
  },
  {
    title: 'Alien',
    score: 90,
    year: 1979
  }
]

const highestRated = movies.reduce((bestMovie, currMovie) => {
  if(currMovie.score < bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
})

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num)