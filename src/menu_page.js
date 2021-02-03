let image_filenames = ['burnt_toast.png', 'dirt.jpg', 'pop_tarts_soggy_crackers.png', 'sweet-dill-pickle.png']
let menu_names = ['Burnt Toast', 'Literally Dirt', 'Toddler Tarts Soggy Crackers Flavor', 'A Jar of Pickles']
let menu_descriptions = ['More like charcoal if you ask me', 'Got it from my backyard, all natural',
    'Don\'t you love dipping your crackers?', 'You\'re paying for the labor of us going to the store']
let item_prices = ['$5 a slice', '$0.02 per lb', '$10 for one, untoasted. $500 for toasted', '$1000']
let menu_items = []

function create_menu_item(filename, name, description, price) {
    return {
        name: name,
        description: description,
        filename: filename,
        price: price
    }
}

function load_menu_page() {

    if (menu_items.length == 0) {
        for (let i = 0; i < image_filenames.length; i++) {
            menu_items.push(create_menu_item(image_filenames[i], menu_names[i], menu_descriptions[i], item_prices[i]))
        }
    }
    let menu_page = document.createElement('div')
    menu_page.id = 'menu_page'
    menu_page.setAttribute('class', 'nav_tab')

    for (let i = 0; i < menu_items.length; i++) {

        //Create div for item container, then elements for each item property
        let div = document.createElement('div')
        let img = document.createElement('img')
        let name = document.createElement('h1')
        let price = document.createElement('h2')
        let description = document.createElement('p')

        //Adjust add menu item info to elements
        img.src = `../media/${menu_items[i].filename}`
        img.alt = menu_items[i].name
        name.innerText = menu_items[i].name
        price.innerText = menu_items[i].price
        description.innerText = menu_items[i].description

        //Append elements to item container, then item container to menu page div
        div.appendChild(img); div.appendChild(name); div.appendChild(price); div.appendChild(description);
        div.setAttribute('class', 'menu_item')
        menu_page.appendChild(div)
    }

    return menu_page
}

export {
    load_menu_page
}