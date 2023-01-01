const video = document.getElementById('video');
const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');
const muteButton = document.getElementById('mute-button');
const volumeControl = document.getElementById('volume-control');
const speedButton = document.getElementById('speed-button');
const speedControl = document.getElementById('speed-control');
const skipButtonfor = document.getElementById('skip-button-forward');
const skipButtonback = document.getElementById('skip-button-backward');
const beginVid = document.getElementById('begin');
const endVid = document.getElementById('end');
const vidControl = document.getElementById('vid-control');
const max = document.getElementById('max-button');



function zeroPad(num, places) {
    
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
   
  }
vidControl.setAttribute("max", `${video.duration}`);
vidControl.style.width = "600px";

setInterval(() => {
    var minutes = Math.floor(video.currentTime / 60);
    var seconds = video.currentTime - minutes * 60;
    
    
    document.getElementById("duration").innerText = `${minutes}:${zeroPad(parseInt(seconds),2)}`;
},10)

playButton.addEventListener('click', () => {
    var minute = Math.floor(video.duration/60)
    document.getElementById('full').innerText = `${minute} : ${ parseInt(video.duration - minute*60)}` ;
    console.log(video.style.width);
    video.play();
   
});

stopButton.addEventListener('click', () => {
  video.pause();
 
});

muteButton.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    muteButton.innerHTML = 'Mute';
  } else {
    video.muted = true;
    muteButton.innerHTML = 'Unmute';
  }
});
max.addEventListener('click', function () {
 
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
}
)

volumeControl.addEventListener('change', () => {
  video.volume = volumeControl.value;
});

speedButton.addEventListener('click', () => {
  if (video.playbackRate != 1) {
    video.playbackRate = 1;
    speedControl.value = 1;
   
  }
});

speedControl.addEventListener('change', () => {
  video.playbackRate = speedControl.value;
});

skipButtonfor.addEventListener('click', () => {
    video.currentTime += 10;
});
skipButtonback.addEventListener('click', () => {
    video.currentTime -= 10;
  });
beginVid.addEventListener('click', () => {
    video.currentTime = 0;
})
endVid.addEventListener('click', () => {
    video.currentTime = video.duration;
})

vidControl.addEventListener('change', () => {
    video.currentTime = vidControl.value;
  });
function updateTracker(){
  vidControl.value =  (video.currentTime / video.duration) * 100;
}

////////////////////////////////////////////////////////////////////////


























//================================================================
