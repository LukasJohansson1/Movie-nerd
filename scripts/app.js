let searchT = document.getElementById("searchbar");

searchT.onkeydown = async function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    let searchTerm = searchT.value;
    console.log("Kommer söka efter", searchTerm);
    let results = await searching(searchTerm);
    Results(results);

    searchT.value = "";
  }
};

async function searching(searchString) {
  try {
    const apiKey = "e7eef1471de1734d3b86b16d987d108f";
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`;

    let response = await fetch(url);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function Results(results) {
  let resultDiv = document.getElementById("searchresults");

  resultDiv.innerHTML = "";

  let allObjects = results.results;

  for (let index = 0; index < 8; index++) {
    const object = allObjects[index];

    const movieDiv = document.createElement("div");
    movieDiv.innerHTML = `
      <div>
        <h2>${object.title}</h2>
        <div class="result-inner">
          <p class="overview">${object.overview}</p>
          <p class="release">Release date: ${object.release_date}</p>
        </div>
        <img class="poster" src="https://image.tmdb.org/t/p/w500${object.poster_path}" alt="${object.title} poster image">
        <div>
          <button class="find" onclick="window.open('https://www.themoviedb.org/movie/${object.id}', '_blank')">Find out more</button>
          <button class="remove" >Remove</button>
          <button class="add" >Add</button>
        </div>
      </div>`;
    resultDiv.appendChild(movieDiv);
    movieDiv.classList.add("result");

    const addButton = movieDiv.querySelector('.add');
    addButton.addEventListener('click', () => {
      addToLocalStorage(object);
    });
  }
}

const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

function addToLocalStorage(movie) {
  let storedMovies = localStorage.getItem('movies');
  let movies = storedMovies ? JSON.parse(storedMovies) : [];
  movies.push(movie);
  localStorage.setItem('movies', JSON.stringify(movies));
}



// const addBtns = document.querySelectorAll('.add');
// const removeBtns = document.querySelectorAll('.remove');

// addBtns.forEach((addBtn) => {
//   addBtn.addEventListener('click', () => {
//     addBtn.classList.add('hide');
//     const removeBtn = addBtn.nextElementSibling;
//     removeBtn.classList.remove('hide');
//   });
// });

// removeBtns.forEach((removeBtn) => {
//   removeBtn.addEventListener('click', () => {
//     removeBtn.classList.add('hide');
//     const addBtn = removeBtn.previousElementSibling;
//     addBtn.classList.remove('hide');
//   });
// });
