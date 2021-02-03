//Change info here to change contact info displayed on page
let contact_name = "Jamie"
let email = 'joppel@hubb.me'
let blurb = 'Shoot me a message at the above email address!'

function load_contact_us_page() {

    //create div to hold tab contents
    let div = document.createElement('div')
    div.setAttribute('class', 'nav_tab')
    div.id = 'contact_us_tab'

    //create elements for contact info
    let ele_name = document.createElement('h1')
    let ele_email = document.createElement('h2')
    let ele_blurb = document.createElement('p')

    //add info to elements
    ele_name.textContent = contact_name
    ele_email.textContent = email
    ele_blurb.textContent = blurb

    //Append elements to div
    div.appendChild(ele_name); div.appendChild(ele_email); div.appendChild(ele_blurb);
    div.appendChild(add_image())   
    return div
}

function add_image() {
    let img = document.createElement('img')
    img.src = '../media/me.jpg'
    img.id = 'contact_pic'
    return img
}

export {
    load_contact_us_page
}