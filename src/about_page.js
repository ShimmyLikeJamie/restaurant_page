function load_background_image() {

    //create image element and add attributes
    let img = document.createElement('img')
    img.src = '../media/kawaii_toast.png'
    img.alt = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/2-cute-kawaii-toast-and-toaster-valentina-hramov.jpg'
    img.id = 'cute_toast'
    img.class = 'bg-image'
    return img
}

function load_text() {
    let str = "We are a small restaurant inside Vancouver, WA. Check out our menu via the buttons above!\n\nDisclaimer: We don't actually exist"
    let p = document.createElement('p')
    p.textContent = str
    return p
}

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

function load_about_page() {
    //create div for to hold page contents
    let div = document.createElement('div')
    div.id = 'about_page'
    div.setAttribute('class', 'nav_tab')

    //load info and append to div
    div.appendChild(load_header())
    div.appendChild(load_background_image())
    div.appendChild(load_text())

    //Append div to div#content
    let content = document.getElementById('content')
    content.appendChild(div)
}

export {
    load_about_page
}