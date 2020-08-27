//******************Choropleth Map - Overall Crime Totals******************
//data procured from - https://catalog.data.gov/dataset/index-crimes-by-county-and-agency-beginning-1990
//actual csv file used for map - nyTotals.csv, located in the datafiles folder for this project...data procured from - https://www.seethroughny.net/benchmarking/local-government-spending-and-revenue#
//json map used as a base - https://github.com/deldersveld/topojson/blob/master/countries/us-states/NY-36-new-york-counties.json


//make color range
var totals_domain = [0, 500, 1000, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000];

var totals_color = d3.scaleThreshold()
    .domain(totals_domain)
    .range([d3.rgb("#DCECC9"), d3.rgb('#AADACC'), d3.rgb("#78C6D0"), d3.rgb('#48B3D3'), d3.rgb("#3E94C0"), d3.rgb('#3474AC'), d3.rgb("#2A5599"), d3.rgb('#203686'), d3.rgb("#18216B"), d3.rgb('#11174B')]);

var totalData = d3.map();

//add commas to amounts
var fCom = d3.format(",");

d3.queue()
    .defer(d3.json, "NY-36-new-york-counties.json")
    .defer(d3.csv, "datafiles/nyTotals.csv", function(d) {
        totalData.set(d.id, +d.Total);
    })
    .await(ready);

function ready(error, data) {
    if(error) throw error;

    var newYork = topojson.feature(data, {
        type: "GeometryCollection",
        geometries: data.objects.cb_2015_new_york_county_20m.geometries
    });

    //choose map projection type
    var projection = d3.geoMercator()
        .scale(5000)
        .fitSize([880,880], newYork);

    var geoPath = d3.geoPath()
        .projection(projection);

    //draw map
    d3.select("svg.totals").selectAll("path")
        .data(newYork.features)
        .enter()
        .append("path")
        .attr("d", geoPath)
        .attr("fill", "green")
        .attr("fill", function(d) {
            return totals_color(d.Total = totalData.get(d.properties.GEOID))})
        .append("title")
            .text(function(d) { return d.properties.NAME + ": " + fCom(d.Total); })
        }


//add a legend
var w = 600, h = 50;

var key = d3.select("#legend1")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

var legend = key.append("defs")
    .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "100%")
    .attr("x2", "100%")
    .attr("y2", "100%")
    .attr("spreadMethod", "pad");

    legend.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#DCECC9")
        .attr("stop-opacity", 1);

    legend.append("stop")
        .attr("offset", "11%")
        .attr("stop-color", "#AADACC")
        .attr("stop-opacity", 1);

    legend.append("stop")
        .attr("offset", "22%")
        .attr("stop-color", "#78C6D0")
        .attr("stop-opacity", 1);

    legend.append("stop")
        .attr("offset", "33%")
        .attr("stop-color", "#48B3D3")
        .attr("stop-opacity", 1);

    legend.append("stop")
        .attr("offset", "44%")
        .attr("stop-color", "#3E94C0")
        .attr("stop-opacity", 1);

    legend.append("stop")
        .attr("offset", "55%")
        .attr("stop-color", "#3474AC")
        .attr("stop-opacity", 1);

    legend.append("stop")
        .attr("offset", "66%")
        .attr("stop-color", "#2A5599")
        .attr("stop-opacity", 1);

    legend.append("stop")
        .attr("offset", "77%")
        .attr("stop-color", "#203686")
        .attr("stop-opacity", 1);

    legend.append("stop")
        .attr("offset", "88%")
        .attr("stop-color", "#18216B")
        .attr("stop-opacity", 1);

    legend.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#11174B")
        .attr("stop-opacity", 1);

    key.append("rect")
        .attr("width", w)
        .attr("height", 20)
        .style("fill", "url(#gradient)");

//create tick marks
var x = d3.scaleLinear()
    .domain([0, 50000])

    //ticks are exactly 55 pixels from each end
    .range([50, 599]);

var axis = d3.axisBottom(x)
    .tickValues([500, 45000]);

key.append("g")
    .attr("id", "g-runoff")
    .attr("transform", "translate(0,20)")
    .call(axis);