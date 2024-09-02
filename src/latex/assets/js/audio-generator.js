function generate_audio(source, targetDiv) {

    var style = getComputedStyle(document.documentElement);

    var graycolor = style.getPropertyValue('--color-midgray');
    var maincolor = style.getPropertyValue('--color-main');

    const options = {
        container: '#'+targetDiv,
        height: 48,
        waveColor:  "#a3aec1",
        progressColor: "crimson",
        barWidth: 4,
        barGap: 2,
        barRadius: 4,
        normalize: true,
        url: source,
        cursorWidth: 0, 
    }

    const wavesurfer = WaveSurfer.create(options)

    wavesurfer.on('click', () => {
        wavesurfer.play()
      })

    var playPauseBtn = document.getElementById(targetDiv + '-playbtn');

    playPauseBtn.addEventListener('click', function () {
        if (wavesurfer.isPlaying()) {
            wavesurfer.pause();
            playPauseBtn.innerHTML = '<i class="bx bx-play"></i>';
        } else {
            wavesurfer.play();
            playPauseBtn.innerHTML = '<i class="bx bx-pause"></i>';
        }
    });

    // WaveSurfer play event
    wavesurfer.on('play', function () {
        playPauseBtn.innerHTML = '<i class="bx bx-pause"></i>';
    });

    // WaveSurfer pause event
    wavesurfer.on('pause', function () {
        playPauseBtn.innerHTML = '<i class="bx bx-play"></i>';
    });

    // WaveSurfer finish event
    wavesurfer.on('finish', function () {
        playPauseBtn.innerHTML = '<i class="bx bx-play"></i>';
    });
}