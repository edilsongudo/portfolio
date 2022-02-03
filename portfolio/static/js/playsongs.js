// Handle Headphones icon Click
let audiocheckbox = document.querySelector("#togglesong")
audiocheckbox.addEventListener('click', function() {
    get_songs()
})

//Create Audio
document.body.appendChild(document.createElement('audio'))

// Handle Mute icon
let volume_mute = document.querySelector('#volume-mute')

volume_mute.addEventListener('click', function() {
    let audio = document.querySelector('audio')

    if (audio.paused) {
        volume_mute.classList.remove('fa-volume-mute')
        volume_mute.classList.add('fa-volume')
        audio.play()
    } else {
        volume_mute.classList.remove('fa-volume')
        volume_mute.classList.add('fa-volume-mute')
        audio.pause()
    }
})

function playAudio(audios) {
    let audio_index = Number(localStorage.getItem('audio_index'))

    if (audio_index === null) {
        audio_index = 0
    }

    audio_index += 1
    if (audio_index == (audios.length)) {
        audio_index = 0
    }

    let audio = document.querySelector('audio')
    audio.src = "../static/audio/" + audios[audio_index]
    audio.play()
    volume_mute.classList.remove('fa-volume-mute')
    volume_mute.classList.add('fa-volume')
    volume_mute.style.display = 'block'
    localStorage.setItem('audio_index', audio_index)
  }

function get_songs() {
    $.getJSON($SCRIPT_ROOT + '/songs', {
    }, function(data) {
        playAudio(data['songs'])
    });
}


