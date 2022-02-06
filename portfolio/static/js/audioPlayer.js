//Create Audio
document.body.appendChild(document.createElement('audio'))

const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.querySelector('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currentTimeDiv = document.querySelector('.current')
const durationDiv = document.querySelector('.duration')
const musicIcon = document.querySelector('#music-icon')


async function getSongs() {
    let response = await fetch(`${$SCRIPT_ROOT}/songs`)
    let data = await response.json();
    return data.songs
}

getSongs().then(response => {

    // Song titles
    const songs = response

    // Keep track of song
    let songIndex = Number(localStorage.getItem('songIndex'));
    console.log(songIndex)
    if (songIndex === null) {
        songIndex = 0
    }


    // Initially load song details into DOM
    loadSong(songs[songIndex]);

    // Update song details
    function loadSong(song) {

      audio.src = `static/audio/${song}`;
      song = remove_extension(song)
      title.innerText = song;
      let albumArtURL = `static/albumArts/${song}.jpg`
      var img = new Image()
      img.src = albumArtURL
      img.onload = function () {
        cover.style.display = "block"
        cover.src = albumArtURL;
        musicIcon.style.display = "none"
      }
      img.onerror = function() {
        cover.style.display = "none"
        musicIcon.style.display = "block"
      }

    }

    // Play song
    function playSong() {
      musicContainer.classList.add('play');
      playBtn.querySelector('i.fas').classList.remove('fa-play');
      playBtn.querySelector('i.fas').classList.add('fa-pause');

      audio.play();
    }

    // Pause song
    function pauseSong() {
      musicContainer.classList.remove('play');
      playBtn.querySelector('i.fas').classList.add('fa-play');
      playBtn.querySelector('i.fas').classList.remove('fa-pause');

      audio.pause();
    }

    // Previous song
    function prevSong() {
      songIndex--;

      if (songIndex < 0) {
        songIndex = songs.length - 1;
      }

      loadSong(songs[songIndex]);

      playSong();
      localStorage.setItem('songIndex', songIndex)
    }

    // Next song
    function nextSong() {
      songIndex++;

      if (songIndex > songs.length - 1) {
        songIndex = 0;
      }

      loadSong(songs[songIndex]);

      playSong();
      localStorage.setItem('songIndex', songIndex)
    }

    // Update progress bar
    function updateProgress(e) {
      const { duration, currentTime } = e.srcElement;

      var minutes = Math.floor(currentTime / 60)
      var seconds = Math.floor(currentTime % 60)
      currentTimeDiv.innerHTML = `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`

      var minutes2 = Math.floor(duration / 60)
      var seconds2 = Math.floor(duration % 60)
      durationDiv.innerHTML = `${('0' + minutes2).slice(-2)}:${('0' + seconds2).slice(-2)}`

      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;
    }

    // Set progress bar
    function setProgress(e) {
      const width = this.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;

      audio.currentTime = (clickX / width) * duration;
    }

    // Event listeners
    playBtn.addEventListener('click', () => {
      const isPlaying = musicContainer.classList.contains('play');

      if (isPlaying) {
        pauseSong();
      } else {
        playSong();
      }
    });

    // Change song
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);

    // Time/song update
    audio.addEventListener('timeupdate', updateProgress);

    // Click on progress bar
    progressContainer.addEventListener('click', setProgress);

    // Song ends
    audio.addEventListener('ended', nextSong);

})

