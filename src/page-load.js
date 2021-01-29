function load_image() {

    //create image element and add attributes
    let img = document.createElement('img')
    img.src = '../media/kawaii_toast.png'
    img.alt = 'cute toast'

    //append img to node
    let content = document.getElementById('content')
    content.appendChild(img)

    //create paragraph and link for image source
    let p = document.createElement('p')
    let a = document.createElement('a')
    p.textContent = 'For image source click '
    p.id = 'img_credit'
    a.textContent = 'here'
    a.href = 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/2-cute-kawaii-toast-and-toaster-valentina-hramov.jpg'
    a.target = '_blank'

    //append link to paragraph, then paragraph to div
    p.appendChild(a)
    content.appendChild(p)
}

function load_text() {
    //create 
}

function page_load() {
    load_image()
}

export {
    page_load
}