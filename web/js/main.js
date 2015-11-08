requirejs.config({
    baseUrl: "js/lib",
    paths: {
      d3: "http://d3js.org/d3.v3.min"
    }
});

require(["d3", "nv.d3"], function(d3, c3){
  var chart;
  var data;

  nv.addGraph(function() {
    chart = nv.models.lineChart()
      .options({
        transitionDuration: 300,
        useInteractiveGuideline: true
      })
      .forceX([0, 7])
      .forceY([0, 11])
      .showLegend(true);

    chart.xAxis
      .axisLabel("Time (s)")
      .tickFormat(d3.format(',.1f'));

    chart.yAxis
      .axisLabel('Voltage (V)')
      .tickFormat(function(d) {
        if (d == null) {
          return 'N/A';
        }
        return d3.format(',.2f')(d);
      });

      data = [
        {
          values: [
            {x: 1, y: 1}, 
            {x: 2, y: 2}, 
            {x: 3, y: 3}, 
            {x: 4, y: 4}, 
            {x: 5, y: 5}, 
            {x: 6, y: 6}
          ],
          key: "Increasing Set",
          color: "#ff7f0e",
          strokeWidth: 2
        },
        {
          values: [
            {x: 1, y: 10}, 
            {x: 2, y: 9}, 
            {x: 3, y: 8}, 
            {x: 4, y: 7}, 
            {x: 5, y: 6}, 
            {x: 6, y: 5}
          ],
          key: "Decreasing Set",
          color: "#2222ff"
        }
      ];

    d3.select('#chart1').append('svg')
      .datum(data)
      .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;

  });
});