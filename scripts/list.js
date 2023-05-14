const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

window.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.getElementById('movies-container');
  
    // Retrieve movies from local storage
    let storedMovies = localStorage.getItem('movies');
    let movies = storedMovies ? JSON.parse(storedMovies) : [];
  
    // Display the movies
    movies.forEach((movie) => {
      const movieDiv = document.createElement('div');
      movieDiv.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.overview}</p>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster image">
        <button class="remove" onclick="removeFromLocalStorage(${movie.id})">Remove</button>
      `;
      moviesContainer.appendChild(movieDiv);
    });
  });
  
  function removeFromLocalStorage(movieId) {
    let storedMovies = localStorage.getItem('movies');
    let movies = storedMovies ? JSON.parse(storedMovies) : [];
  
    // Find the movie with the given id and remove it from the array
    movies = movies.filter((movie) => movie.id !== movieId);
  
    localStorage.setItem('movies', JSON.stringify(movies));
  
    // Reload the page to reflect the updated list
    location.reload();
  }