function load_image() {

    //create image element and add attributes
    let img = document.createElement('img')
    img.src = '../media/kawaii_toast.png'
    img.alt = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/2-cute-kawaii-toast-and-toaster-valentina-hramov.jpg'
    img.id = 'cute_toast'

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
    tab1.textContent = 'Tab 1'
    tab1.style.float = 'left'
    tab2.textContent = 'Tab 2'
    tab2.style.float = 'center'
    tab3.textContent = 'Tab 3'
    tab3.style.float = 'right'
    ul.appendChild(tab1); ul.appendChild(tab2); ul.appendChild(tab3);
    let content = document.getElementById('content')
    content.appendChild(ul)
}

function page_load() {
    load_header()
    load_image()
}

export {
    page_load
}