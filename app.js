let searchText = document.getElementById("searchbar")

searchText.onkeydown = async function (event) {
  if (event.key === "Enter") {
    event.preventDefault()

    let searchTerm = searchText.value 

    let results = await search(searchTerm)
    renderResults(results)
    
  }
}