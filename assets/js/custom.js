/**
 * Custom JS
 * Use this file to add your custom scripts
 */

function generate_menu_items() {
    // Menu items order
    // Data Code, Category, Item Name, Item Price, Description
    let menu_categories = [
        ['breakfast', 'Breakfast'],
        ['saladsandwich', 'Salad & Sandwich'],
        ['noodlesfriedrice', 'Noodles & Fried Rice'],
        ['starters', 'Starters'],
        ['indianbreads', 'Indian Breads'],
        ['thali', 'Thali'],
        ['pulao', 'Pulao'],
        ['curriesdal', 'Indian Curries & Dal'],
        ['bowls', 'Bowls'],
        ['desserts', 'Desserts'],
        ['beverages', 'Beverages'],
        ['signaturedishes', 'Signature Dishes'],
    ];

    let menu_items = [
        ['breakfast', 'Breakfast','Poha','50','Beaten rice tossed with peanuts, onions, mustard seeds and curry leaves, sprinkled with rajasthani bhujia'],
        ['breakfast','Breakfast','Poori Sabzi','70','4pcs poori served with sabji, salad & pickles'],
        ['breakfast','Breakfast','Roti Sabzi','70','4pcs roti served with sabji, salad & pickles'],
        ['breakfast','Breakfast','Chhole Poori','80','4pcs poori served with chhole, pickles & salad'],
        ['saladsandwich', 'Salad & Sandwich','Ritomis Green Salad','149','Green lettuce, cucumber, tomato, black olives, bell pepper with balsamico dressing, sprinkled with roasted peanuts, sesame seeds & mildly salted'],
        ['saladsandwich', 'Salad & Sandwich','Green Salad with Roasted Cottage cheese','179','Green lettuce with tossed paneer, cucumber, tomato, black olives, bell pepper, balsamico dressing, sprinkled with sesame seeds & mildly salted'],
        ['saladsandwich', 'Salad & Sandwich','Healthy Sprouts Salad','99','Sprouted green moong, black gram & peanuts mixed with cucumber, tomato & lemon juice, sprinkled with mild salt'],
        ['saladsandwich', 'Salad & Sandwich','Veg grill sandwich','89','Toasted sandwich filled with tomato, cucumber, onion & green chutney'],
        ['saladsandwich', 'Salad & Sandwich','Corn mayo spinach sandwich','99','Grilled sandwich with corn, fresh spinach & mayonnaise filling'],
        ['saladsandwich', 'Salad & Sandwich','Cheese Chutney Tomato sandwich','109','Toasted sandwich filled with tomato, cucumber, onion & green chutney & cheese'],
        ['saladsandwich', 'Salad & Sandwich','Veg Mayo grill sandwich','109','Toasted sandwich filled with tomato, cucumber, onion & green chutney & mouth-watering mayonnaise'],
        ['saladsandwich', 'Salad & Sandwich','Paneer grill sandwich','129','Toasted sandwich served with toasted paneer, onion, tomato & cilantro'],
        ['saladsandwich', 'Salad & Sandwich','Mushroom grill sandwich','129','Toasted sandwich served with roasted fresh mushrooms, bell pepper & onions'],
        ['noodlesfriedrice', 'Noodles & Fried Rice','Veg Fried Rice','99','Fried rice with assorted fresh vegetables tossed with tomato, chilli & soya sauce'],
        ['noodlesfriedrice', 'Noodles & Fried Rice','Veg Noodles','99','Flavorful Hakka noodles stir-fried with assorted fresh vegetables, tossed with tomato, chilli & soya sauce'],
        ['noodlesfriedrice', 'Noodles & Fried Rice','Paneer Fried Rice','129','Fried rice with fresh paneer & assorted vegetables tossed with tomato, chilli & soya sauce'],
        ['noodlesfriedrice', 'Noodles & Fried Rice','Paneer Noodles','129','Flavorful Hakka noodles stir-fried with fresh paneer & assorted vegetables, tossed with tomato, chilli & soya sauce'],
        ['noodlesfriedrice', 'Noodles & Fried Rice','Mushroom Fried Rice','129','Fried rice with button mushrooms & assorted vegetables, tossed with tomato, chilli & soya sauce'],
        ['noodlesfriedrice', 'Noodles & Fried Rice','Mushroom Noodles','129','Flavorful Hakka noodles stir-fried with button mushrooms & assorted vegetables, tossed with tomato, chilli & soya sauce'],
        ['starters', 'Starters','Veg Manchurian','99','Deep-fried minced assorted vegetables tossed in a thick & spicy manchurian gravy'],
        ['starters', 'Starters','Gobi Manchurian','99','Deep-fried crispy cauli-flowers tossed in a thick & spicy manchurian gravy'],
        ['starters', 'Starters','Paneer Manchurian','149','Deep-fried paneer tossed in a thick & spicy manchurian gravy'],
        ['starters', 'Starters','Paneer Chilli','149','Crispy fried cottage cheese, onion & capsicum cubes tossed with green chilli, ginger, garlic in tomato & chilli sauce'],
        ['starters', 'Starters','Mushroom Chilli','149','Crispy fried button mushrooms, onion & capsicum cubes tossed with green chilli, ginger, garlic in tomato & chilli sauce'],
        ['starters', 'Starters','Baby Corn Chilli','149','Crispy fried golden baby corns, onion & capsicum cubes tossed with green chilli, ginger, garlic in tomato & chilli sauce'],
        ['indianbreads', 'Indian Breads','Phulka','12',''],
        ['indianbreads', 'Indian Breads','Ghee Phulka','15',''],
        ['indianbreads', 'Indian Breads','Plain Paratha','35',''],
        ['indianbreads', 'Indian Breads','Aaloo Paratha','50','Mashed boiled potatoes & home-made flavorful masala, served with raita, salad & pickles'],
        ['indianbreads', 'Indian Breads','Onion Paratha','50','Stuffed onions & home-made flavorful masala, served with raita, salad & pickles'],
        ['indianbreads', 'Indian Breads','Gobi Paratha','50','Grated fresh cauli-flowers stuffed in paratha, served with raita, salad & pickles'],
        ['indianbreads', 'Indian Breads','Mooli Paratha','50','Grated fresh radish stuffed in paratha, served with raita, salad & pickles'],
        ['indianbreads', 'Indian Breads','Hara Matar Paratha','60','Mashed green peas fried with flavorful home-made masala stuffed in paratha'],
        ['indianbreads', 'Indian Breads','Garlic Paratha','60','Stuffed paratha with chopped garlic, served with raita, salad & pickles'],
        ['indianbreads', 'Indian Breads','Paneer Paratha','70','Stuffed grated cottage cheese served with raita, salad & pickles'],
        ['indianbreads', 'Indian Breads','Cheese Chilli Paratha','80','Grated Amul processed cheese, green chilli, black pepper stuffed in paratha'],
        ['indianbreads', 'Indian Breads','Banarsi Paratha','70','Assorted vegetables & paneer fried in ghee, stuffed in paratha'],
        ['indianbreads', 'Indian Breads','Sattu Paratha','70','Roasted gram flour mixed with onion, garlic, green chilli, ajwain & fresh lemon juice, stuffed in paratha'],
        ['indianbreads', 'Indian Breads','Garlic Laccha Paratha','50','Finely chopped garlic, fresh coriander & green chilli in layered paratha'],
        ['indianbreads', 'Indian Breads','Methi Laccha Paratha','40','Tossed kasuri methi in layered paratha, served with raita, salad & pickles'],
        ['indianbreads', 'Indian Breads','Pudina Laccha Paratha','40','Finely chopped fresh mint leaves in a layered paratha'],
        ['indianbreads', 'Indian Breads','Ajwain Laccha Paratha','40','Ajwain in layered paratha served with raita, salad & pickles'],
        ['thali', 'Thali','Ritomis Thali','130','2 Phulka, 2 Seasonal subji, Jeera rice and Dal. Served with Raita, Salad & Pickles'],
        ['thali', 'Thali','Ritomis Special Thali','180','1 Paratha, 2 Phulka, 1 Paneer gravy, 2 Seasonal subji, Jeera rice and Dal. Served with Raita, Salad, Papad & Sweet'],
        ['pulao', 'Pulao','Tomato Pulao','89','Aromatic & flavorful rice stir-fried with tomato, served with raita & salad'],
        ['pulao', 'Pulao','Potato Jaipuria Pulao','89','Aromatic & flavorful rice stir-fried with boiled potato cubes & kalonji, served with raita & salad'],
        ['pulao', 'Pulao','Capsicum Corn Pulao','99','Aromatic & flavorful rice stir-fried with diced green capsicum and sweet corn, served with raita & salad'],
        ['pulao', 'Pulao','Chilli Garlic Pulao','119','Aromatic & flavorful rice stir-fried with chopped garlic & sliced green chilli, served with raita & salad'],
        ['pulao', 'Pulao','Cilantro Garlic Pulao','119','Aromatic & flavorful rice stir-fried with fresh coriander leaves & chopped garlic, served with raita & salad'],
        ['pulao', 'Pulao','Mix Veg Pulao','129','Aromatic & flavorful rice stir-fried with assorted fresh vegetables, served with raita & salad'],
        ['pulao', 'Pulao','Mushroom Pulao','129','Aromatic & flavorful rice stir-fried with button mushrooms, served with raita & salad'],
        ['pulao', 'Pulao','Paneer Peas Pulao','159','Aromatic & flavorful rice stir-fried with cottage cheese cubes & green peas, served with raita & salad'],
        ['curriesdal', 'Indian Curries & Dal','Aaloo Matar (Dry / Semi-gravy / Gravy)','85',''],
        ['curriesdal', 'Indian Curries & Dal','Aaloo Gobi (Dry / Semi-gravy / Gravy)','85',''],
        ['curriesdal', 'Indian Curries & Dal','Aaloo Capsicum (Dry / Semi-gravy / Gravy)','85',''],
        ['curriesdal', 'Indian Curries & Dal','Jeera Aaloo Dry','85',''],
        ['curriesdal', 'Indian Curries & Dal','Aaloo Gobi Matar (Dry / Semi-gravy / Gravy)','85',''],
        ['curriesdal', 'Indian Curries & Dal','Baigan Bharta','99','Grilled eggplant fried with onion, chopped garlic, tomato, green chilli, and seasoned with mustard oil'],
        ['curriesdal', 'Indian Curries & Dal','Bhindi Dry','80','Fresh lady fingers diced & sauteed with onions'],
        ['curriesdal', 'Indian Curries & Dal','Bhindi Masala','90','Fried lady fingers seasoned in thick gravy made of onion, tomato & curd'],
        ['curriesdal', 'Indian Curries & Dal','Besan Kadhi','90','Gram flour dissolved in thin curd steamed & seasoned with mustard, methi seeds â€©prepared in Rajasthan style'],
        ['curriesdal', 'Indian Curries & Dal','Chhole Masala','90','Chickpeas boiled and cooked in thick gravy with many Indian whole spices'],
        ['curriesdal', 'Indian Curries & Dal','Rajma Masala','90','Red kidney beans boiled and cooked in thick gravy with many Indian whole spices'],
        ['curriesdal', 'Indian Curries & Dal','Mushroom Masala','110','Fresh button mushrooms cooked in thick gravy of onions, tomatoes, aromatic Indian spices'],
        ['curriesdal', 'Indian Curries & Dal','Kadhai Mushroom (Dry / Semi-gravy / Gravy)','119','Sauteed fresh button mushroom, capsicum & onions cubes cooked in spicy gravy'],
        ['curriesdal', 'Indian Curries & Dal','Mix Veg Curry (Dry / Semi-gravy / Gravy)','119','Assorted vegetables in rich & aromatic Indian gravy'],
        ['curriesdal', 'Indian Curries & Dal','Palak Corn','119','Fresh leafy spinach boiled & cooked with sweet corn and fresh cream'],
        ['curriesdal', 'Indian Curries & Dal','Palak Paneer','129','Fresh leafy spinach boiled & cooked with cottage cheese cubes and fresh cream'],
        ['curriesdal', 'Indian Curries & Dal','Matar Paneer','129','Fresh cottage cheese and green peas cooked in aromatic Indian gravy'],
        ['curriesdal', 'Indian Curries & Dal','Kadhai Paneer','129','Sauteed fresh cottage cheese, capsicum & onion cubes cooked in spicy gravy'],
        ['curriesdal', 'Indian Curries & Dal','Methi Matar Malai','149','Dried kasuri methi leaves & green peas cooked in thick creamy gravy'],
        ['curriesdal', 'Indian Curries & Dal','Paneer Bhurji','149','Mashed cottage cheese lightly cooked with diced onions, tomatoes, capsicum & aromatic spices'],
        ['curriesdal', 'Indian Curries & Dal','Pepper Mushroom Dry','149','Fresh mushroom tossed with green capsicum & onions, sprinkled with black pepper'],
        ['curriesdal', 'Indian Curries & Dal','Paneer Butter Masala','159','Cottage cheese cubes cooked in think creamy cashew gravy & Amul butter'],
        ['curriesdal', 'Indian Curries & Dal','Pepper Paneer Dry','179','Fresh cottage cheese cubes tossed with capsicum, onion and black pepper'],
        ['curriesdal', 'Indian Curries & Dal','Fried Dal','99','Healthy & flavorful boiled lentils tempered with mild spices'],
        ['curriesdal', 'Indian Curries & Dal','Dal Tadka','99','Healthy & flavorful boiled lentils tempered with cumin seeds, garlic & mild spices'],
        ['curriesdal', 'Indian Curries & Dal','Dal Makhni','129','Black urad lentils and red kidney beans cooked with butter and cream'],
        ['curriesdal', 'Indian Curries & Dal','Mix Dal','129','Assorted mix of flavorful lentils tempered with mild spices'],
        ['bowls', 'Bowls','Dal Chawal','99','Healthy portion of flavorful lentils cooked with mild spices served with boiled rice'],
        ['bowls', 'Bowls','Kadhi Chawal','119','Portion of rajasthani Besan kadhi with pakoras served with boiled rice'],
        ['bowls', 'Bowls','Rajma Chawal','119','Healthy Red kidney beans boiled and cooked in thick gravy served with boiled rice'],
        ['bowls', 'Bowls','Chhole Chawal','119','Healthy Chickpeas boiled and cooked in thick gravy served with boiled rice'],
        ['bowls', 'Bowls','Jeera Rice Dal','119','Healthy portion of flavorful lentils cooked with mild spices served with jeera rice'],
        ['bowls', 'Bowls','Jeera Rice Dal Makhni','129','Black urad lentils and red kidney beans cooked with butter and cream served with boiled rice'],
        ['bowls', 'Bowls','Plain Khichdi','99','Lentils and rice cooked together & tempered with cumin seeds, ghee and mild spices'],
        ['bowls', 'Bowls','Special Veggie Khichdi','139','Lentils, rice and chopped assorted vegetables cooked together & tempered with cumin seeds, ghee and mild spices'],
        ['bowls', 'Bowls','Exotic Veggie Khichdi','159','Lentils, rice, broccoli, zucchini, bell peppers and other assorted vegetables cooked together & tempered with ghee and mild spices'],
        ['desserts', 'Desserts','Gulab Jamun (2pcs)','70','Soft fried dumplings made of Khoa soaked in sugar syrup which melts in your mouth'],
        ['desserts', 'Desserts','Kheer','60','Slow-cooked rice, milk and sugar flavored with saffron, cardamom, cashews, almonds & raisins'],
        ['beverages', 'Beverages','Sweet Lassi','50','Thick and sweet curd based drink to cool your body and soul'],
        ['beverages', 'Beverages','Rose Lassi','60','Thick and sweet curd based drink flavored with rose syrup'],
        ['beverages', 'Beverages','Chocolate Lassi','70','Thick and sweet curd based drink flavored with cocoa'],
        ['beverages', 'Beverages','Dry Fruit Lassi','80','Thick and sweet curd based drink mixed with assorted dry fruits'],
        ['beverages', 'Beverages','Cold Badam Milk','50','Milk based drink blended with almonds, saffron & cardamom'],
        ['beverages', 'Beverages','Butter Milk','40','Cold and refreshing light curd based beverage tempered with cumin seeds and black salt'],
        ['signaturedishes', 'Signature Dishes', 'Special Litti Chokha, 2pcs','150','Deep fried whole wheat flour dumplings stuffed with a mix of fried gram flour (sattu), onions, garlic, green chilli, mustard oil, fresh squeezed lemon and coriander leaves. Served with desi ghee and chokha (mashed potatoes, grilled brinjal and tomatoes)'],
        ['signaturedishes', 'Signature Dishes','Exotic Veggie Cheese Sandwich, 2 pcs','150','Toasted breads layered with mix of assorted vegetables (broccoli, zucchini, mushroom, bell pepper) and processed Amul cheese, seasoned with herbs'],
        ['signaturedishes', 'Signature Dishes','Exotic Veg Pulao','160','Aromatic & flavorful rice stir-fried with assorted fresh vegetables (broccoli, zucchini, bell pepper, baby corn), served with raita & salad'],
        ['signaturedishes', 'Signature Dishes','Exotic Veggie Dal Khichdi','160','Lentils, rice, broccoli, zucchini, bell peppers and other assorted vegetables cooked together & tempered with ghee and mild spices'],
        ['signaturedishes', 'Signature Dishes','Ritomis Special Thali','180','1 Paratha, 2 Phulka, 1 Paneer gravy, 2 Seasonal sabji, Jeera rice and Dal. Served with Raita, Salad, Papad & Sweet']
    ];

    let total_categories = menu_categories.length;
    let categories_html = '';
    for (let counter = 0; counter < total_categories; counter++) {
        let category_html = '';
        if (counter == 0) {
            category_html = `
                <li class="active">
                    <a href="#menu_images" data-filter=".${menu_categories[counter][0]}">${menu_categories[counter][1]}</a>
                </li>
            `;
        } else {
            category_html = `
                <li>
                    <a href="#menu_images" data-filter=".${menu_categories[counter][0]}">${menu_categories[counter][1]}</a>
                </li>
            `;
        }

        categories_html = categories_html + category_html;
    }
    $('#menu_categories').html(categories_html);
    // console.log(categories_html);

    let total_items = menu_items.length;
    let items_html = '';
    for (let counter = 0; counter < total_items; counter++) {
        let item_html = `
            <div class="col-md-6 section_menu__grid__item ${menu_items[counter][0]}">
                <div class="section_menu__item">
                    <div class="row">
                        <div class="col-3 align-self-center">
                            <div class="section_menu__item__img">
                                <img src="assets/img/26.jpg" alt="...">
                            </div>
                        </div>
                
                        <div class="col-7">
                            <h4>${menu_items[counter][2]}</h4>
                            <p>
                            ${menu_items[counter][4]}
                            </p>
                        </div>
                        
                        <div class="col-2">
                            <div class="section_menu__item__price text-center">
                            ₹ ${menu_items[counter][3]}
                            </div>
                        </div>
                    </div> <!-- / .row -->
                </div>
            </div>
        `;

        items_html = items_html + item_html;
    }
    $('#menu_images').html(items_html);
    // console.log(items_html);
}

// generate_menu_items()