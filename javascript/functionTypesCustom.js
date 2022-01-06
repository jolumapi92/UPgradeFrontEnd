import { getINFO } from "./apiConsumption.js";

export async function drawPersonalize(url, container, divs) {
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

export async function personalDrawChartBar(url, container, divs) {
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
    var chart = new google.visualization.BarChart(container);
    chart.draw(data, options);
}

export async function personalDrawChartHistogram(url, container, divs) {
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
    var chart = new google.visualization.Histogram(container);
    chart.draw(data, options);
}

export async function personalDrawChartAreaChart(url, container, divs) {
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
    var chart = new google.visualization.AreaChart(container);
    chart.draw(data, options);
}

export async function personalDrawChartScatterChart(url, container, divs) {
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
    var chart = new google.visualization.ScatterChart(container);
    chart.draw(data, options);
}