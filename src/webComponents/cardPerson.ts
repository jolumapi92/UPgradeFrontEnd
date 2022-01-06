const template = document.createElement('template');
template.innerHTML = `
    <style>
    div {
        width: 100%;
    }
    </style>
    <div>
        <h4> ID. ${Math.floor(Math.random() * 100)} </h4>
        <h2> Name </h2>
        <p id="job">  Job </p>
        <p id="age">  Age </p>
    </div>
`;


class CardPerson extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( { mode: "open" } );
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
    }
}

export { CardPerson };