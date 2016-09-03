(function() {
  angular
    .module('blocJams')
    .controller('MetricsCtrl', ['Metric', MetricsCtrl]);

  function MetricsCtrl(Metric) {
    var list = Metric.listSongsPlayed();
    var table = {};
    for (var i = 0; i < list.length; i++) {
      if (table[list[i]] === undefined) {
        table[list[i]] = 1; // played once
      } else {
        table[list[i]] += 1; // increase count of playing
      }
    }

    this.table = table;
    this.titles = Object.keys(table);
  }
})();
