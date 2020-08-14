const urlDaily = "https://api.openweathermap.org/data/2.5/onecall?lat=";

let forecast = [15, 17, 19, 14, 22, 24, 20, 18]

function forecastGraph(){
    var svg = d3.select("#forecast").append("svg")
            .attr("id", "graph")
            .attr("height", "100%")
            .attr("width", "100%");
    svg.selectAll("rect")
        .data(forecast)
        .enter().append("rect")
            .attr("height", function(d){ return ((d - 10) * 8) })
            .attr("width", "20")
            .attr("x", function(d, i){return (i * 30) + 25})
            .attr("y", function (d, i){return 220 - (d * 8)});  
}

forecastGraph();

export const getDaily = async (jsonResponse, apikey, lang, units) => {
    try {
        const response2 = await fetch(urlDaily + jsonResponse.coord.lat + "&lon=" + jsonResponse.coord.lon + apikey + lang + units);
        if (response2.ok) {
            forecast = [];
            document.getElementById('forecast').remove
            const jsonResponse2 = await response2.json();
            console.log(jsonResponse2);
            for (const [key, value] of Object.entries(jsonResponse2.daily)){
                forecast.push(`${value.temp.day}`)
            };
            let graph = document.getElementById("graph");
            graph.remove();
            forecastGraph();
            console.log(forecast);
            return jsonResponse2;
        } throw new Error('Request failed')
    } catch (error) {
        console.log(error);
    };
};