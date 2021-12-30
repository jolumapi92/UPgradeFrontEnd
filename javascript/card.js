const template = document.createElement('template');
template.innerHTML = `
  <style>
    div {
        width: 100%;
    }
    #info {
        background-color: #6C63FF;
        border-radius: 12px;
        border: none;
        padding: 5px 15px;
        color: white;
    }
    p {
        font-size: 16px;
    }
  </style>
  <div>
    <h1 id="name"></h1>
    <div  id="card-container"></div>
    <button id="info"> Info </button>
  </div>
`


class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( {mode: 'open'} );
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');
    }
    
    getInfo () {
        const job = faker.name.jobTitle();
        const account = faker.finance.account();
        const amount = faker.finance.currencyName();
        const bitcoinADD = faker.finance.bitcoinAddress();
        const name = this.shadowRoot.querySelector('#card-container');
        
        name.replaceChildren()
        let element = document.createElement('p');
        let element2 = document.createElement('p');
        let element3 = document.createElement('p');
        let element4 = document.createElement('p');
        
        element.innerText = job;
        element2.innerText = account;
        element3.innerText = amount;
        element4.innerText = bitcoinADD;
        name.append(element);
        name.append(element2);
        name.append(element3);
        name.append(element4);
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#info').addEventListener('click', ()=>{  this.getInfo()  } )
    }
}

export { UserCard };


