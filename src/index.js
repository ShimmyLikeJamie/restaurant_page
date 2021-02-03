import {load_about_page} from './about_page.js'
import {load_header} from './header_nav.js']
import {load_menu_page} from './menu_page.js'

function clear_page() {
    let current_page = document.querySelector('.nav_tab')
    current_page.remove()
    current_tab.style.backgroundColor = 'lightskyblue'
}

//Grab div#content
let content = document.querySelector('div#content')

//Start on about page
content.appendChild(load_header())
content.appendChild(load_about_page())
let current_tab = document.getElementById('about_tab')

//Attach function to 'about us' tab
let about_tab = document.getElementById('about_tab')
about_tab.onclick = function(current_tab) {
    clear_page()
    content.appendChild(load_about_page())
    current_tab = document.getElementById('about_tab')
    current_tab.style.backgroundColor = '#3eaff5'
}