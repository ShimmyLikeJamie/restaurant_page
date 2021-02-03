import {load_about_page} from './about_page.js'

function clear_page() {
    let current_tab = document.querySelector('.nav_tab')
    current_tab.remove()
}

//Start on about page
load_about_page()

//Attach function to 'about us' tab
let about_tab = document.getElementById('about_tab')
about_tab.onclick = function() {
    clear_page()
    load_about_page()
}