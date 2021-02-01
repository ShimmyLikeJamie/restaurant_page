function load_background_image() {

    //create image element and add attributes
    let img = document.createElement('img')
    img.src = '../media/kawaii_toast.png'
    img.alt = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/2-cute-kawaii-toast-and-toaster-valentina-hramov.jpg'
    img.id = 'cute_toast'
    img.class = 'bg-image'

    //grab div#content
    let content = document.getElementById('content')

    //append link/para to div
    content.appendChild(img)
}

function load_text() {
    //create 
}

function load_header() {

    //create unordered list and tabs then append
    let ul = document.createElement('ul')
    let tab1 = document.createElement('li')
    let tab2 = document.createElement('li')
    let tab3 = document.createElement('li')

    //Add id and adjust content of tabs
    tab1.textContent = 'About'
    tab1.id = 'tab1'
    tab2.textContent = 'Menu'
    tab2.id = 'tab2'
    tab3.textContent = 'Contact Us'
    tab3.id = 'tab3'
    ul.appendChild(tab1); ul.appendChild(tab2); ul.appendChild(tab3);
    let content = document.getElementById('content')
    content.appendChild(ul)
}

function page_load() {
    load_header()
    load_background_image()
}

export {
    page_load
}