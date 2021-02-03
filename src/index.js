import {load_about_page} from './about_page.js'
import {load_header} from './header_nav.js'

function clear_page() {
    let current_tab = document.querySelector('.nav_tab')
    current_tab.remove()
}

//Grab div#content
let content = document.querySelector('div#content')

//Start on about page
content.appendChild(load_header())
content.appendChild(load_about_page())

//Attach function to 'about us' tab
let about_tab = document.getElementById('about_tab')
about_tab.onclick = function() {
    clear_page()
    content.appendChild(load_about_page())
}