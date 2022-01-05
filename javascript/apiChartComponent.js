import { drawChartLine, drawChartBar, drawChartHistogram, drawChartArea, ScatterChart } from "./functionsTypes.js";
import { getINFO } from "./apiConsumption.js";

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
    <input id="url-from-user" placeholder="Enter the Endpoint" />
    
    <div id="div-for-input"> 
        
    </div>
    

    <div id="table-for-api" style="width: 900px; height: 500px"> </div>
    <button id="render-btn"> Render </button>
    <button id="add-btn"> Add Column </button>
`;

class ChartAPI extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
  }
  async getAPI(type, url, container) {

    switch (type) {
      case "LineChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: drawChartLine(url, container),
        });
        break;
      case "BarChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: drawChartBar(url, container),
        });
        break;
      case "Histogram":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: drawChartHistogram(url, container),
        });
        break;
      case "AreaChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: drawChartArea(url, container),
        });
        break;
      case "ScatterChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: ScatterChart(url, container),
        });
        break;
      default:
        break;
    }
  }

  async getCustomEndpoint(type, url, container, divs) {
    google.charts.load("current", {
      packages: ["corechart"],
      callback: drawPersonalize(url, container),
    });

    async function drawPersonalize(url, container) {
      const info = await getINFO(url);
      const keys = Object.keys(info["Time Series (5min)"]);
      let firstArray = [];
      for (let index = 0; index < keys.length; index++) {
        let creatingArray = [];
        let phrase = "";
        phrase += index;
        phrase += divs[0].value;
    
        if (index === 0) {
          for (let index = 0; index < divs.length; index++) {
            creatingArray.push( divs[index].value );
          }
        } else {
          creatingArray.push(phrase);
          creatingArray.push(
            Number(info["Time Series (5min)"][keys[index]]["2. high"])
          );
          creatingArray.push(
            Number(info["Time Series (5min)"][keys[index]]["3. low"])
          );
        }
    
        firstArray.push(creatingArray);
      }
      var data = google.visualization.arrayToDataTable(firstArray);
      var options = {
        title: "Company Performance",
        legend: { position: "bottom" },
      };
      var chart = new google.visualization.LineChart(container);
      chart.draw(data, options);
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#render-btn").addEventListener("click", () => {
      const url = this.getAttribute('url')
      const typeSelect = this.shadowRoot.querySelector('#chart-select').value
      const urlEntered = this.shadowRoot.querySelector('#url-from-user').value
      const div = this.shadowRoot.querySelector('#table-for-api');
      const divsColumns = Array.from(this.shadowRoot.querySelector('#div-for-input').children)
      if(urlEntered) {
        this.getCustomEndpoint(typeSelect, urlEntered, div, divsColumns);
      } else if (url) {
        this.getAPI(typeSelect, url, div);
      }
      
    });
    this.shadowRoot.querySelector('#add-btn').addEventListener('click', () => {
      const element = document.createElement('input');
      this.shadowRoot.querySelector('#div-for-input').appendChild(element);
    })
  }
}

export { ChartAPI };
