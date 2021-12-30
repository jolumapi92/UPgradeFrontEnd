const fetchingINFO = async () => {
    const box = document.querySelector("#blackbox");
    const board = document.querySelector("#whiteboard");
    console.log(board)
    box.style.display = "flex";
    board.replaceChildren();
    const info = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=200");
    const parsing = await info.json()
    console.log(parsing)
    for ( let counter= 0; counter < parsing.results.length; counter++ ) {
        console.log( parsing.results[counter].name )
        let element = document.createElement('p');
        element.innerHTML = `<h2>Name of the pokemon:</h2>  <p> ${parsing.results[counter].name.toUpperCase()}</p>`
        board.appendChild(element);
    }
}

export { fetchingINFO }