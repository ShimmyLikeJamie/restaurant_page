function load_header() {
    //create unordered list and tabs then append
    let ul = document.createElement('ul')
    let tab1 = document.createElement('li')
    let tab2 = document.createElement('li')
    let tab3 = document.createElement('li')

    //Add id and adjust content of tabs
    tab1.textContent = 'About'
    tab1.id = 'about_tab'
    tab2.textContent = 'Menu'
    tab2.id = 'menu_tab'
    tab3.textContent = 'Contact Us'
    tab3.id = 'contact_us_tab'

    ul.appendChild(tab1); ul.appendChild(tab2); ul.appendChild(tab3);

    
    return ul
}

export {
    load_header
}