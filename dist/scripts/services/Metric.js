(function() {
  angular
    .module('blocJams')
    .service('Metric', ['$rootScope', Metric]);

  function Metric($rootScope) {
    $rootScope.songPlays = [];

    return {
      // records a metric object by pushing it to $rootScope array
      registerSongPlay: function(songObj) {
        // Add time to event register
        songObj['playedAt'] = new Date();
        $rootScope.songPlays.push(songObj);
      },
      listSongsPlayed: function() {
        var songs = [];
        angular.forEach($rootScope.songPlays, function(song) {
          songs.push(song.title);
        });
        return songs;
      }
    };
  }
})();
