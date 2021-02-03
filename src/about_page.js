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

function load_about_page() {
    //create div for to hold page contents
    let div = document.createElement('div')
    div.id = 'about_page'
    div.setAttribute('class', 'nav_tab')

    //load info and append to div
    div.appendChild(load_background_image())
    div.appendChild(load_text())

    return div
}

export {
    load_about_page
}