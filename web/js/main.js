requirejs.config({
    baseUrl: "js/lib",
    paths: {
      d3: "http://d3js.org/d3.v3.min"
    }
});

require(["d3", "nv.d3"], function(d3, c3){

var chart;
var data;

d3.json("/data/avgTax.json", function(error, data) {

if (error) return console.warn(error);

nv.addGraph(function() {
  chart = nv.models.lineChart()
    .options({
      transitionDuration: 300,
      useInteractiveGuideline: true,
      forceX: [5000],
      forceY: [.18, .52],
      showLegend: true
    });

  chart.xAxis
    .axisLabel("Income")
    .tickFormat(d3.format('$,.d'));

  chart.yAxis
    .axisLabel('Average Tax (%)')
    .tickFormat(d3.format('.1%'));

  d3.select('#chart1').append('svg')
    .datum(data)
    .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;

});

});

});