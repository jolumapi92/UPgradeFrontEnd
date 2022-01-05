import { drawChartLine, drawChartBar, drawChartHistogram, drawChartArea, ScatterChart } from "./functionsTypes.js";

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
    <button> Render </button>
`;

class ChartAPI extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
  }
  async getAPI(type, url) {

    switch (type) {
      case "LineChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: drawChartLine(url),
        });
        break;
      case "BarChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: drawChartBar(url),
        });
        break;
      case "Histogram":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: drawChartHistogram(url),
        });
        break;
      case "AreaChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: drawChartArea(url),
        });
        break;
      case "ScatterChart":
        google.charts.load("current", {
          packages: ["corechart"],
          callback: ScatterChart(url),
        });
        break;
      default:
        break;
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      const url = this.getAttribute('url')
      const typeSelect = this.shadowRoot.querySelector('#chart-select').value
      console.log("Este es el bueno", typeSelect);
      this.getAPI(typeSelect, url);
    });
  }
}

export { ChartAPI };
