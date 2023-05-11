let searchT = document.getElementById("searchbar")

searchT.onkeydown = async function (event) {
  if (event.key === "Enter") {
    event.preventDefault()

    let searchTerm = searchT.value 
    console.log("Kommer söka efter", searchTerm)
    let results = await searching(searchTerm)
    Results(results)
    
    searchT.value = '';

  }
}
async function searching(searchString) {
  try {
    const apiKey = "e7eef1471de1734d3b86b16d987d108f" 
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`
    
      let response = await fetch(url)
      let json = await response.json()
      return json
    } catch(error){

  }
}
async function Results(results) {
  let resultDiv = document.getElementById("searchresults")

  resultDiv.innerHTML = "";
  

  let allObjects = results.results

  for (let index = 0; index < 8; index++) {
    const object = allObjects[index]

    const movieDiv = document.createElement("div")
    movieDiv.innerHTML = `
      <div>
        <h2>${object.title}</h2>
        <div class="result-inner">
          <p class="overview">${object.overview}</p>
          <p class="release">Release date: ${object.release_date}</p>
        </div>
        <img class="poster" src="https://image.tmdb.org/t/p/w500${object.poster_path}" alt="${object.title} poster image">
        <button class="find" onclick="window.open('https://www.themoviedb.org/movie/${object.id}', '_blank')">Find out more</button>
        <button class="add" onclick="addlist(btns)" >Add</button>
        <button class="remove show" >Remove</button>
      </div>`
    resultDiv.appendChild(movieDiv)
    movieDiv.classList.add("result")  
}}

const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});


const btns = document.querySelectorAll('.add');

function addlist(btns) {
  btns.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('add');
      button.classList.toggle('remove');
      console.log("hej");
  
      if (button.classList.contains('remove')) {
        button.innerText = 'Remove';
      } else {
        button.innerText = 'Add';
      }
    });
  });
  }


  