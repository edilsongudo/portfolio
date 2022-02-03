var checkbox = document.querySelector("#toggledark")
var rot = 360
var theme = localStorage.getItem('theme')
var html = document.querySelector("html")

if (theme === 'light') {
    toggleLightMode(html)
} else {
    toggleDarkMode(html)
}

checkbox.addEventListener('click', function() {
    var html = document.querySelector("html")

    if (html.classList.contains('dark-mode')) {
        toggleLightMode(html)
    } else {
        toggleDarkMode(html)
    }
})

function toggleLightMode(html) {
    checkbox.classList.remove('fa-moon')
    checkbox.classList.add('fa-sun')
    html.classList.remove('dark-mode')
    checkbox.style.transform = "rotate(" + rot + "deg)"
    rot += 360
    localStorage.setItem('theme', 'light')
}

function toggleDarkMode(html) {
    checkbox.classList.remove('fa-sun')
    checkbox.classList.add('fa-moon')
    html.classList.add('dark-mode')
    checkbox.style.transform = "rotate(" + rot + "deg)"
    rot += 360
    localStorage.setItem('theme', 'dark')
}


