import { Chart } from "./chart.js";
import { getINFO } from "./apiConsumption.js";
import { ChartAPI } from './apiChartComponent.js';

window.customElements.define('chart-api', ChartAPI);
window.customElements.define('chart-jose', Chart);