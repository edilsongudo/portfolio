let audiocheckbox = document.querySelector('#togglesong')
let playerModal = document.querySelector('.music-player-modal')
let closeBtn = document.querySelector('#close-player')

// Show player
audiocheckbox.addEventListener('click', function() {
    playerModal.classList.add('music-player-modal-show')
})

// Hide player
closeBtn.addEventListener('click', function () {
    playerModal.classList.remove('music-player-modal-show')
})
