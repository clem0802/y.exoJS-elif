// STARTER code (elif)
const movies = [
    { title: 'Batman', rating: 9.1 },
    { title: 'Dune', rating: 8.1 },
    { title: 'Avengers', rating: 8.4 },
    { title: 'Interstellar', rating: 8.7 }
  ];
const minRating = 8.5
  
function filterMovies(movies, minRating) {
    // TODO
    // return the movies with the rating of at least 8.5
}
  
filterMovies(movies, minRating)

/*--------------------------------*/
/*--------------------------------*/
const movies = [
    { title: 'Batman', rating: 9.1 },
    { title: 'Dune', rating: 8.1 },
    { title: 'Avengers', rating: 8.4 },
    { title: 'Interstellar', rating: 8.7 }
  ];
const minRating = 8.5
  
function filterMovies(movies, minRating) {
    // TODO
    // return the movies with the rating of at least 8.5
    return movies.filter((movie)=>movie.rating > minRating);
}
  
console.log(filterMovies(movies, minRating));
  // 0: {title: 'Batman', rating: 9.1}
  // 1: {title: 'Interstellar', rating: 8.7}
  // length: 2