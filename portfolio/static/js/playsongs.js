let audiocheckbox = document.querySelector('#togglesong')
let playerModal = document.querySelector('.music-player-modal')
let closeBtn = document.querySelector('#close-player')

// Show player
audiocheckbox.addEventListener('click', function() {
    playerModal.classList.add('music-player-modal-show')
    document.body.style.position = 'fixed'
    document.body.style.top = `-${window.scrollY}px`
})

// Hide player
closeBtn.addEventListener('click', function () {
    playerModal.classList.remove('music-player-modal-show')
    document.body.style.position = ''
    document.body.style.top = ''
})
