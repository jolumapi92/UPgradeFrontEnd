const addAnIdea = () => {
    const input = document.querySelector("#input-add-idea-input").value
    const list = document.querySelector('#list-hunting');
    const element = document.createElement('li');
    element.innerText = input;
    list.appendChild(element);
}

export  { addAnIdea };