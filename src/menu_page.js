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
    let div = document.createElement('div')
}

export {
    load_menu_page
}