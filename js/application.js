
$(document).ready(function() {

		var mainMenu = $('main-menu');

		$('#fullpage').fullpage();



});


function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'u1zgFlCw8Aw',
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      // code to stop the audio player should go here
      function stop() { document.getElementById("bkmusic").src = "music2.mp3"; }
    }

    $('.audio').prop("volume", 0.8);

  }