const movies = [
  {
    movieName: "Freedom",
    movieYear: 2005,
    movieGenre: "thriller",
  },
  {
    movieName: "narnia",
    movieYear: 2008,
    movieGenre: "action",
  },
  {
    movieName: "princess",
    movieYear: 2011,
    movieGenre: "comedy",
  },
];

for (let movie of movies) {
  addToMovieList(movie);
}

const addMovieForm = document.querySelector("#addMovieForm");

addMovieForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const movieName = formData.get("movieName");
  const movieYear = formData.get("movieYear");
  const movieGenre = formData.get("movieGenre");
  const newMovies = {
    movieName,
    movieYear,
    movieGenre,
  };
  console.log(newMovies);
  movies.push(newMovies);

  //movies.push(newMovies.movieName);
  // movies.push(newMovies.movieYear);
  //movies.push(newMovies.movieGenre);
  addToMovieList(movies[movies.length - 1]);

  event.target.reset();
});

function addToMovieList(movie) {
  console.log(movie);

  const div = document.createElement("div");
  div.classList.add("movie");

  const h2 = document.createElement("h2");
  h2.textContent = movie.movieName;
  div.appendChild(h2);

  const h3 = document.createElement("h3");
  h3.textContent = movie.movieYear;
  div.appendChild(h3);

  const p = document.createElement("p");
  p.textContent = movie.movieGenre;
  div.appendChild(p);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  div.appendChild(deleteBtn);

  document.getElementById("movie-list").append(div);
}
