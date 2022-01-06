import { drawChartLine, drawChartBar, drawChartHistogram, drawChartArea, ScatterChart } from "./functionsTypes.js";
import { drawPersonalize, personalDrawChartBar, personalDrawChartHistogram, personalDrawChartAreaChart, personalDrawChartScatterChart } from "./functionTypesCustom.js";

const template = document.createElement("template");
template.innerHTML = `
    <style>
        button {
            padding: 15px 15px;
            border-radius: 22px;
            background-color: #4c45ce;
            color: white;
            border: none;
        }
        select {
          margin: 10px 10px;
        }
    </style>
    <h3> </h3>
    <select id="chart-select">
        <option value="LineChart" selected>LineChart</option>
        <option value="BarChart">BarChart</option>
        <option value="Histogram">Histogram</option>
        <option value="AreaChart">AreaChart</option>
        <option value="ScatterChart">ScatterChart</option>
    </select>
    <select id="chart-add-select">
        
    </select>
    <input id="url-from-user" placeholder="Enter the Endpoint" />
    <input id="company" placeholder="Enter which company" />
    
    <div id="div-for-input"> 
        
    </div>
    

    <div id="table-for-api" style="width: 900px; height: 500px"> </div>
    <button id="render-btn"> Render </button>
    <button id="add-btn"> Add Column </button>
    <button id="quick-add">Add to Quick Search </button>
`;

class ChartAPI extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
  }
  async getAPI(type, url, container, company) {

    switch (type) {
      case "LineChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: drawChartLine(url, container, company),
        });
        break;
      case "BarChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: drawChartBar(url, container, company),
        });
        break;
      case "Histogram":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: drawChartHistogram(url, container, company),
        });
        break;
      case "AreaChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: drawChartArea(url, container, company),
        });
        break;
      case "ScatterChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: ScatterChart(url, container, company),
        });
        break;
      default:
        break;
    }
  }

  async getCustomEndpoint(type, url, container, divs) {

    switch (type) {
      case "LineChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: drawPersonalize(url, container, divs),
        });
        break;
      case "BarChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: personalDrawChartBar(url, container, divs),
        });
        break;
      case "Histogram":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: personalDrawChartHistogram(url, container, divs),
        });
        break;
      case "AreaChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: personalDrawChartAreaChart(url, container, divs),
        });
        break;
      case "ScatterChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: personalDrawChartScatterChart(url, container, divs),
        });
        break;
      default:
        break;
    }

    
  
  
  
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#render-btn").addEventListener("click", () => {
      const url = this.getAttribute('url')
      const company = this.shadowRoot.querySelector('#company').value
      const typeSelect = this.shadowRoot.querySelector('#chart-select').value
      const urlEntered = this.shadowRoot.querySelector('#url-from-user').value
      const select = this.shadowRoot.querySelector("#chart-add-select").value
      const div = this.shadowRoot.querySelector('#table-for-api');
      const divsColumns = Array.from(this.shadowRoot.querySelector('#div-for-input').children)
      console.log("jojjo")
      if(urlEntered !== '') {
        this.getCustomEndpoint(typeSelect, urlEntered, div, divsColumns);
        console.log(1)
      } else if (url !== '' && company !== '') {
        this.getAPI(typeSelect, url, div, company);
        console.log(2)
      } else if(select !== '') {
        this.getAPI(typeSelect, url, div, select);
        console.log(3)
      }
      
    });
    this.shadowRoot.querySelector('#add-btn').addEventListener('click', () => {
      const element = document.createElement('input');
      this.shadowRoot.querySelector('#div-for-input').appendChild(element);
    })
    this.shadowRoot.querySelector('#quick-add').addEventListener('click', () => {
      const url = this.getAttribute('url')
      const company = this.shadowRoot.querySelector('#company').value
      const select = this.shadowRoot.querySelector("#chart-add-select");
      let element = document.createElement('option');
      element.value = company;
      element.innerText = company;
      select.appendChild(element)
      console.log(element, element.value, select);
    })
  }
}

export { ChartAPI };
