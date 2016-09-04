(function() {
  angular
    .module('blocJams')
    .controller('MetricsCtrl', ['Metric', MetricsCtrl]);

  function MetricsCtrl(Metric) {
    var list = Metric.listSongsPlayed();
    var table = {};
    var titles;

    for (var i = 0; i < list.length; i++) {
      if (table[list[i]] === undefined) {
        table[list[i]] = 1; // played once
      } else {
        table[list[i]] += 1; // increase count of playing
      }
    }

    titles = Object.keys(table);

    this.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: true,
        duration: 500,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };

    this.data = [];

    for (var i = 0; i < titles.length; i++) {
      this.data.push({
        key: titles[i],
        y: table[titles[i]]
      });
    }
  }
})();
