import { getINFO } from "./apiConsumption.js";
export async function drawChartLine(url) {

    const info = await getINFO(url);

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
    var chart = new google.visualization.LineChart(
      document.getElementById("curve_chart")
    );
    chart.draw(data, options);
}

export async function drawChartBar(url) {

    const info = await getINFO(url);

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
    var chart = new google.visualization.BarChart(
      document.getElementById("curve_chart")
    );
    chart.draw(data, options);

}

export async function drawChartHistogram(url) {

    const info = await getINFO(url);

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
    var chart = new google.visualization.Histogram(
      document.getElementById("curve_chart")
    );
    chart.draw(data, options);

}

export async function drawChartArea(url) {

    const info = await getINFO(url);

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
    var chart = new google.visualization.AreaChart(
      document.getElementById("curve_chart")
    );
    chart.draw(data, options);
}

export async function ScatterChart(url) {

    const info = await getINFO(url);

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
    var chart = new google.visualization.ScatterChart(
      document.getElementById("curve_chart")
    );
    chart.draw(data, options);
}   