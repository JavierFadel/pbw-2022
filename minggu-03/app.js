/*
    Simple video properties app.
    Author: Javier F.
    NIM: A11.2022.14381
    Prodi: Teknik Informatika
    Modified: 23 Sept. 2022
*/

// Variables.
let videoPlayer = document.getElementById('videoPanel');
let playButton = document.getElementById('togglePlayButton');
let fullscreenButton = document.getElementById('toggleFullscreen');
let fastPlaybackButton = document.getElementById('toggleFastSpeed');
let slowPlaybackButton = document.getElementById('toggleSlowSpeed');
let muteButton = document.getElementById('toggleMute');
let isPlaying, isFullscreen, isMuted = false;

// TODO: rewind, fast-forward, mute, duration.

// Event listener for pressed-button.
document.addEventListener('keydown', function(event) {
    // Get keycode, use it.
    const keyCode = event.code;
    switch(keyCode) {
        case 'Space':
            togglePlay();
            break;
        case 'KeyF':
            videoPanel.requestFullscreen();
            break;
        case 'ArrowRight':
            videoPlayer.playbackRate = 4.0;
            break;
        case 'ArrowLeft':
            videoPlayer.playbackRate = 1.0;
            break;
        case 'KeyM':
            toggleMute();
            break;
    }
});

// Toggle between play and pause.
function togglePlay() {
    isPlaying ? videoPlayer.pause() : videoPlayer.play();
}

// Toggle (not really) to fullscreen mode.
function toggleFullscreen() {
    if (isFullscreen) {
        videopanel.exitFullscreen();
        isFullscreen = false;
    } else {
        videoPanel.requestFullscreen();
        isFullscreen = true;
    }
}

// Toggle mute action.
function toggleMute() {
    if (isMuted) {
        videoPlayer.muted = false;
        isMuted = false;
    } else {
        videoPlayer.muted = true;
        isMuted = true;
    }
}

// Listener for video playback speed: faster.
fastPlaybackButton.addEventListener('click', (e) => {
    videoPlayer.playbackRate = 4.0;
    
});

// Listener for video playback speed: slower.
slowPlaybackButton.addEventListener('click', (e) => {
    videoPlayer.playbackRate = 1.0;
});

// Toggle between play and pause, toggle fullscreen.
playButton.addEventListener('click', togglePlay);
fullscreenButton.addEventListener('click', toggleFullscreen);
muteButton.addEventListener('click', toggleMute);

// Stating the condition when space button is pressed.
videoPlayer.onplaying = function() { isPlaying = true; }
videoPlayer.onpause = function() { isPlaying = false; }
