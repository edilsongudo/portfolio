let toggle_theme_picker = document.querySelector('#toggle-theme-picker')
let theme_picker =  document.querySelector('.theme-picker')
toggle_theme_picker.addEventListener('click', ()=> {
    toggle_theme_picker.style.display = "none"
    theme_picker.style.width = "100%"
    theme_picker.style.opacity = "100%"
})


let datacolor1 = localStorage.getItem('--buttonbg1')
let datacolor2 = localStorage.getItem('--buttonbg2')

document.querySelector(':root').style.setProperty('--buttonbg1', datacolor1)
document.querySelector(':root').style.setProperty('--buttonbg2', datacolor2)

colors = document.querySelectorAll('.color')
colors.forEach(color => {
    color.addEventListener('click', ()=> {

    colors.forEach(color => {
        color.style.opacity = "50%"
        color.style.transform = "none"
    })

    color.style.opacity = "100%"
    color.style.transform = "scale(1.2)"
        let datacolor1 = color.getAttribute('data-color1')
        let datacolor2 = color.getAttribute('data-color2')
        document.querySelector(':root').style.setProperty('--buttonbg1', datacolor1)
        document.querySelector(':root').style.setProperty('--buttonbg2', datacolor2)

        localStorage.setItem('--buttonbg1', datacolor1)
        localStorage.setItem('--buttonbg2', datacolor2)

        toggle_theme_picker.style.display = "block"
        theme_picker.style.width = "0"
        theme_picker.style.opacity = "0"
    })
})
