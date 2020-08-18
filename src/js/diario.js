import {dateTime} from './time_date.js';

const urlDaily = "https://api.openweathermap.org/data/2.5/onecall?lat=";

let forecast = [];

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 450 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom,
    parse = d3.timeParse("%s");

function createLineChart(data){ 
    var svg = d3.select("#forecast")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("id", "currentGraph")
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")

    var x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return d.time; }))
        .range([ 0, width ]);   
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
        
      // Add Y axis
        var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) {return d.temp })])
        .range([ height, 0 ]);
    svg.append("g")
        .call(d3.axisLeft(y));

    svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
        .x(function(d) { return x(d.time) })
        .y(function(d) { return y(d.temp) })
    )
}

createLineChart(forecast);

export const getDaily = async (jsonResponse, apikey, lang, units) => {
    try {
        const response2 = await fetch(urlDaily + jsonResponse.coord.lat + "&lon=" + jsonResponse.coord.lon + apikey + lang + units);
        if (response2.ok) {
            forecast = [];
            document.getElementById('forecast').remove
            const jsonResponse2 = await response2.json();
            console.log(jsonResponse2);
            for (const [key, value] of Object.entries(jsonResponse2.hourly)){
                forecast.push({time: parse(value.dt) ,temp: value.temp})
            };
            forecast.splice(23);
            let lineChart = document.getElementById('currentGraph');
            lineChart.remove();
            createLineChart(forecast);
            console.log(forecast);
            return jsonResponse2;
        } throw new Error('Request failed')
    } catch (error) {
        console.log(error);
    };
};