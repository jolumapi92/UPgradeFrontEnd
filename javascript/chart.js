const template = document.createElement('template');
template.innerHTML = `
    <style>
        button {
            padding: 15px 15px;
            border-radius: 22px;
            background-color: #4c45ce;
            color: white;
            border: none;
        }
    </style>
   <div>
      <h3></h3>
      <button> Get Data & Graphic data </button>
   </div>
`;


class Chart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( { mode: "open" } );
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    }

    getInfo() {
        const product = faker.commerce.product();
        const product2 = faker.commerce.product();
        const product3 = faker.commerce.product();
        const product4 = faker.commerce.product();
        const product5 = faker.commerce.product();
        
        
        const price = Number(faker.commerce.price());
        const price2 = Number(faker.commerce.price());
        const price3 = Number(faker.commerce.price());
        const price4 = Number(faker.commerce.price());
        const price5 = Number(faker.commerce.price());


        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {

            var data = google.visualization.arrayToDataTable([
              ['Product', 'Hours per Day'],
              [product2,     price],
              [product3,     price2],
              [product4,     price3],
              [product5, price4],
              [product,   price5]
            ]);
    
            var options = {
              title: 'Budget'
            };
    
            var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    
            chart.draw(data, options);
          }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('button').addEventListener( 'click', () => this.getInfo() )
    }

}

export { Chart };