var channelSelect = document.querySelector('select');
var audioContainer = document.querySelector('.audio-container');
var channelValueInit = 'normal';

function createAudio(channelValue) {
  audioContainer.innerHTML = '';
  var player = document.createElement('audio');
  var source1 = document.createElement('source');
  var source2 = document.createElement('source');

  player.controls = true;
  player.mozAudioChannelType = channelValue;
  source1.src = 'audio/dragon.ogg';
  source1.type = 'audio/ogg';
  source2.src = 'audio/dragon.mp3';
  source2.type = 'audio/mpeg';

  player.appendChild(source1);
  player.appendChild(source2);
  audioContainer.appendChild(player);

  player.addEventListener('mozinterruptbegin', function() {
    var notification = new Notification('Metal interrupted!', { body: "Something more important?" });
  });

  player.addEventListener('mozinterruptend', function() {
    var notification = new Notification('Metal resumed!', { body: "Important thing finished." });
  }); 
}

channelSelect.addEventListener('change', function() {
  createAudio(channelSelect.value);
});

createAudio(channelValueInit);