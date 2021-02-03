import {load_about_page} from './about_page.js'
import {load_header} from './header_nav.js'
import {load_menu_page} from './menu_page.js'
import {load_contact_us_page} from './contact_us_page.js'

let active_color = '#3eaff5'
let inactive_color = 'lightskyblue'

function clear_page() {
    let current_page = document.querySelector('.nav_tab')
    current_page.remove()
    current_tab.style.backgroundColor = inactive_color
}

//Grab div#content
let content = document.querySelector('div#content')

//Start on about page
content.appendChild(load_header())
content.appendChild(load_about_page())
let current_tab = document.getElementById('about_tab')

//Attach functions to tabs
let about_tab = document.getElementById('about_tab')
about_tab.onclick = function() {
    clear_page()
    content.appendChild(load_about_page())
    current_tab = about_tab
    current_tab.style.backgroundColor = active_color
}

let menu_tab = document.getElementById('menu_tab')
menu_tab.onclick = function() {
    clear_page()
    content.appendChild(load_menu_page())
    current_tab = menu_tab
    current_tab.style.backgroundColor = active_color
}

let contact_us_tab = document.getElementById('contact_us_tab')
contact_us_tab.onclick = function() {
    clear_page()
    content.appendChild(load_contact_us_page())
    current_tab = contact_us_tab
    current_tab.style.backgroundColor = active_color
}