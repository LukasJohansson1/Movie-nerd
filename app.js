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

  const apiKey = "e7eef1471de1734d3b86b16d987d108f" 
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`
   
    let response = await fetch(url)
    let json = await response.json()
    return json
  }

async function Results(results) {
  let resultDiv = document.getElementById("searchresults")
  

  let allObjects = results.results

  for (let index = 0; index < allObjects.length; index++) {
    const object = allObjects[index]
    console.log("loopar igenom objekten ", object)

    const movieDiv = document.createElement("div")
    movieDiv.innerHTML = `
    <div class="result">
      <h2>${object.title}</h2>
      <p>${object.overview}</p>
      <p>Rating: ${object.vote_average}</p>
      <p>Release date: ${object.release_date}</p>
      <img class="poster" src="https://image.tmdb.org/t/p/w500${object.poster_path}" alt="${object.title} poster image">
    </div>
    `
    movieDiv.classList.add("resultat")
    resultDiv.appendChild(movieDiv)
  }
}