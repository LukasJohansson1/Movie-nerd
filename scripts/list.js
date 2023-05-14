const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

window.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.getElementById('movies-container');
  
    let storedMovies = localStorage.getItem('movies');
    let movies = storedMovies ? JSON.parse(storedMovies) : [];
  
    movies.forEach((movie) => {
      const movieDiv = document.createElement('div');
      movieDiv.innerHTML = `
    <div class="list">
        <div>
            <h2>${movie.title}</h2>
            <p class="overview">${movie.overview}</p>
            <img class="poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster image">
        </div>
        <button class="remove" onclick="removeFromLocalStorage(${movie.id})">Remove</button>
    </div>
      `;
      moviesContainer.appendChild(movieDiv);
    });
  });
  
  function removeFromLocalStorage(movieId) {
    let storedMovies = localStorage.getItem('movies');
    let movies = storedMovies ? JSON.parse(storedMovies) : [];
  
    movies = movies.filter((movie) => movie.id !== movieId);
  
    localStorage.setItem('movies', JSON.stringify(movies));
  
    location.reload();
  }
