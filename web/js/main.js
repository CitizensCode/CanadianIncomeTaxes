var chart;
var data;

d3.json("/data/avgTax.json", function(error, data) {

if (error) {
  return console.warn(error);
}

nv.addGraph(function() {
  chart = nv.models.lineWithFocusChart()
    .options({
      transitionDuration: 300,
      useInteractiveGuideline: true,
      showLegend: true,
      xScale: d3.scale.linear()
    });

  chart.brushExtent([10000,990000]);

  chart.xAxis
    .tickFormat(d3.format('$,.d'));

  chart.x2Axis
    .axisLabel("Income");

  chart.yAxis
    .axisLabel('Average Tax (%)')
    .tickFormat(d3.format('.1%'));

  chart.y2Axis
    .tickFormat(d3.format('.1%'));

  d3.select('#chart1').append('svg')
    .datum(data)
    .transition().duration(500)
    .call(chart);

  nv.utils.windowResize(chart.update);
  return chart;

});

});
