const xmlGetInfo = function() {
    const box = document.querySelector("#blackbox");
    const board = document.querySelector("#whiteboard");
    box.style.display = "flex";
    let xml = new XMLHttpRequest();
    xml.open( 'GET', 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=200', true );

    xml.onload = function () {
        if(this.status === 200) {
            board.replaceChildren();
            let element = document.createElement('p');
            element.innerText = this.responseText
            board.appendChild(element);
        }
    }
    xml.send();
}

export { xmlGetInfo };