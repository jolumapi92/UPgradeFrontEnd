import { getINFO } from "./apiConsumption.js";
export async function drawChartLine(url, container, company) {
  const info = await getINFO(url, company);
  const keys = Object.keys(info["Time Series (5min)"]);
  let firstArray = [];

  for (let index = 0; index < keys.length; index++) {
    let creatingArray = [];
    let phrase = "";
    phrase += index;
    phrase += "hr";

    if (index === 0) {
      creatingArray.push("Hour");
      creatingArray.push("High");
      creatingArray.push("Low");
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
    curveType: "function",
    legend: { position: "bottom" },
  };
  var chart = new google.visualization.LineChart(container);
  chart.draw(data, options);
}

export async function drawChartBar(url, container, company) {
  const info = await getINFO(url, company);

  const keys = Object.keys(info["Time Series (5min)"]);
  let firstArray = [];

  for (let index = 0; index < keys.length; index++) {
    let creatingArray = [];
    let phrase = "";
    phrase += index;
    phrase += "hr";

    if (index === 0) {
      creatingArray.push("Hour");
      creatingArray.push("High");
      creatingArray.push("Low");
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

export async function drawChartHistogram(url, container, company) {
  const info = await getINFO(url, company);

  const keys = Object.keys(info["Time Series (5min)"]);
  let firstArray = [];

  for (let index = 0; index < keys.length; index++) {
    let creatingArray = [];
    let phrase = "";
    phrase += index;
    phrase += "hr";

    if (index === 0) {
      creatingArray.push("Hour");
      creatingArray.push("High");
      creatingArray.push("Low");
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

export async function drawChartArea(url, container, company) {
  const info = await getINFO(url, company);

  const keys = Object.keys(info["Time Series (5min)"]);
  let firstArray = [];

  for (let index = 0; index < keys.length; index++) {
    let creatingArray = [];
    let phrase = "";
    phrase += index;
    phrase += "hr";

    if (index === 0) {
      creatingArray.push("Hour");
      creatingArray.push("High");
      creatingArray.push("Low");
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

export async function ScatterChart(url, container, company) {
  const info = await getINFO(url, company);

  const keys = Object.keys(info["Time Series (5min)"]);
  let firstArray = [];

  for (let index = 0; index < keys.length; index++) {
    let creatingArray = [];
    let phrase = "";
    phrase += index;
    phrase += "hr";

    if (index === 0) {
      creatingArray.push("Hour");
      creatingArray.push("High");
      creatingArray.push("Low");
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
