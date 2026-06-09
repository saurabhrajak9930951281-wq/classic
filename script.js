/* ══════════════════════════════════════════
   CLASSIC DISHES PVT LTD — script.js
   ══════════════════════════════════════════ */

/* ══════════════════════════════════
   DATA: MENU
   To update: add/remove items here
══════════════════════════════════ */
const MENU_DATA = {

  /* ════════════════════════════════════════
     VEG MENU  — Classic Catering Menu (PDF)
  ════════════════════════════════════════ */
  veg: {


    welcomeDrinks: {
      icon: "🥤",
      label: "Welcome Drinks",
      items: [
        { id:"v-wd1", name:"Passion Fruit Juice",      desc:"Refreshing chilled passion fruit juice",                              price:0 },
        { id:"v-wd2", name:"Lime & Mint",              desc:"Classic fresh lime and mint cooler",                                  price:0 },
        { id:"v-wd3", name:"Blue Lagoon",              desc:"Chilled blue curacao-style mocktail with lime and soda",              price:0 },
        { id:"v-wd4", name:"Fresh Watermelon Juice",   desc:"Cold-pressed fresh watermelon juice",                                price:0 },
        { id:"v-wd5", name:"Pineapple & Guava Mix",    desc:"Tropical blend of pineapple and guava juices",                       price:0 },
        { id:"v-wd6", name:"Fruit Mocktail",           desc:"Seasonal fresh fruit mocktail — vibrant and refreshing",             price:0 },
      ]
    },

    vegStarters: {
      icon: "🥗",
      label: "Vegetarian Starters",
      items: [
        { id:"v-st1",  name:"Veg. Cutlet",          desc:"Crispy golden cutlets stuffed with spiced mixed vegetables",            price:0 },
        { id:"v-st2",  name:"Cheese Corn Kebab",    desc:"Juicy kebabs with sweet corn and melted cheese filling",                price:0 },
        { id:"v-st3",  name:"Hara Bhara Kebab",     desc:"Spinach, peas and paneer patties with mint chutney",                   price:0 },
        { id:"v-st4",  name:"Veg. Crispy",          desc:"Assorted crispy fried vegetables with dipping sauce",                  price:0 },
        { id:"v-st5",  name:"Veg. Spring Roll",     desc:"Crispy golden rolls stuffed with stir-fried mixed vegetables",         price:0 },
        { id:"v-st6",  name:"Paneer Chilly",        desc:"Indo-Chinese style paneer tossed in a spicy chilli sauce",             price:0 },
        { id:"v-st7",  name:"Paneer Tikka",         desc:"Tandoor-grilled marinated paneer with peppers and onions",             price:0 },
        { id:"v-st8",  name:"Veg. Manchurian Dry",  desc:"Crispy fried vegetable balls tossed in a tangy Manchurian sauce",     price:0 },
        { id:"v-st9",  name:"Cocktail Mini Samosa", desc:"Bite-sized crispy samosas filled with spiced potatoes and peas",       price:0 },
        { id:"v-st10", name:"Cheese & Corn Bites",  desc:"Golden fried bites with a cheesy sweet corn filling",                  price:0 },
        { id:"v-st11", name:"Honey Chilli Potato",  desc:"Crispy potato strips tossed in a sweet and spicy honey chilli glaze",  price:0 },
        { id:"v-st12", name:"Salted Fries",         desc:"Classic golden salted fries, crispy and light",                        price:0 },
        { id:"v-st13", name:"Peri Peri Fries",      desc:"Crispy fries tossed in a bold peri peri spice blend",                  price:0 },
      ]
    },

    salads: {
      icon: "🥙",
      label: "Salads",
      items: [
        { id:"v-sl1", name:"Classic Creamy Coleslaw",   desc:"Shredded cabbage and carrots in a creamy tangy dressing",           price:0 },
        { id:"v-sl2", name:"Russian Salad",             desc:"Diced vegetables bound in a light mayonnaise dressing",             price:0 },
        { id:"v-sl3", name:"Sprout Mix Chaat Salad",    desc:"Nutritious mixed sprouts tossed with chaat masala and lemon",       price:0 },
        { id:"v-sl4", name:"Mediterranean Pasta Salad", desc:"Pasta tossed with olives, peppers and a herb vinaigrette",          price:0 },
      ]
    },

    liveCounters: {
      icon: "🔥",
      label: "Live Counters",
      items: [
        { id:"v-lc1", name:"Chaat Counter",      desc:"Live chaat station — pani puri, sev puri, bhel and more",                 price:0 },
        { id:"v-lc2", name:"Dosa Counter",       desc:"Live dosa station — plain, masala and assorted varieties made to order",  price:0 },
        { id:"v-lc3", name:"Chinese Counter",    desc:"Live Indo-Chinese station — noodles, rice and Manchurian",               price:0 },
        { id:"v-lc4", name:"Kebab Counter",      desc:"Live tandoor kebab counter — assorted veg and non-veg kebabs",           price:0 },
        { id:"v-lc5", name:"Appam & Stew",       desc:"Live Appam station with coconut milk stew",                              price:0 },
        { id:"v-lc6", name:"Soup Counter",       desc:"Live soup station — hot soups served fresh to guests",                   price:0 },
        { id:"v-lc7", name:"Pav Bhaji Counter",  desc:"Live Pav Bhaji station — spiced mashed vegetables with buttered pav",   price:0 },
      ]
    },

    mainCourse: {
      icon: "🍛",
      label: "Veg. Main Course",
      items: [
        { id:"v-m1",  name:"Dal Fry / Tadka",             desc:"Classic tempered lentils with garlic and dried red chilli",                  price:0 },
        { id:"v-m2",  name:"Dal Makhni",                   desc:"Slow-cooked black lentils simmered in a rich buttery tomato-cream gravy",    price:0 },
        { id:"v-m3",  name:"Veg. Jalfrezi",                desc:"Crisp stir-fried seasonal vegetables in a tangy tomato-capsicum sauce",      price:0 },
        { id:"v-m4",  name:"Veg. Kolhapuri",               desc:"Fiery Kolhapuri-style mixed vegetable curry with bold whole spices",         price:0 },
        { id:"v-m5",  name:"Shahi Veg / Navratna Khorma",  desc:"Creamy Mughlai-style mixed vegetable korma with nuts, raisins and cream",   price:0 },
        { id:"v-m6",  name:"Paneer Kadai",                 desc:"Cottage cheese cooked with bell peppers, tomatoes and freshly ground kadai masala", price:0 },
        { id:"v-m7",  name:"Paneer Tikka Masala",          desc:"Tandoor-kissed paneer cubes simmered in a rich, smoky tikka masala gravy",  price:0 },
        { id:"v-m8",  name:"Paneer Khorma",                desc:"Soft cottage cheese in a mild, fragrant almond and cream korma sauce",       price:0 },
        { id:"v-m9",  name:"Paneer Makhni",                desc:"Velvety buttery tomato sauce with soft cubes of fresh paneer",              price:0 },
        { id:"v-m10", name:"Methi Matar Malai",            desc:"Fresh fenugreek leaves and green peas in a delicate cream gravy",            price:0 },
        { id:"v-m11", name:"Malai Veg. Kofta",             desc:"Soft paneer and vegetable dumplings in a rich malai-based gravy",           price:0 },
        { id:"v-m12", name:"Chole Masala",                 desc:"Punjabi-style chickpeas in a tangy, boldly spiced tomato-onion gravy",      price:0 },
        { id:"v-m13", name:"Tawa Bhaji",                   desc:"Seasonal mixed vegetables tossed on a hot tawa with fresh masala",          price:0 },
        { id:"v-m14", name:"Dahi Vada",                    desc:"Soft lentil dumplings soaked in chilled yogurt, topped with chutneys",      price:0 },
        { id:"v-m15", name:"Jeera Aloo",                   desc:"Baby potatoes tempered with cumin seeds and fresh coriander",               price:0 },
        { id:"v-m16", name:"Aloo Matar Gobhi",             desc:"Potato, green peas and cauliflower dry-cooked in aromatic spices",          price:0 },
        { id:"v-m17", name:"Aloo Gobhi Fry",               desc:"Crispy dry-fried potato and cauliflower with turmeric and coriander",       price:0 },
        { id:"v-m18", name:"Veg. Stew",                    desc:"Gentle coconut-milk stew with mixed vegetables and mild whole spices",       price:0 },
      ]
    },

    indianBreads: {
      icon: "🫓",
      label: "Indian Breads",
      items: [
        { id:"v-b1", name:"Chapati",              desc:"Soft whole-wheat flatbread cooked on a hot tawa",                        price:0 },
        { id:"v-b2", name:"Mini Parantha",        desc:"Flaky, layered whole-wheat parantha, lightly buttered on the tawa",      price:0 },
        { id:"v-b3", name:"Rumali Roti",          desc:"Paper-thin handkerchief bread — soft, delicate and light",               price:0 },
        { id:"v-b4", name:"Tandoori Wheat Roti",  desc:"Wholesome wheat roti baked fresh in a clay tandoor",                    price:0 },
        { id:"v-b5", name:"Mini Kulcha",          desc:"Soft leavened bread, plain or lightly stuffed, from the tandoor",       price:0 },
        { id:"v-b6", name:"Poori",                desc:"Deep-fried puffed whole-wheat bread, crispy and golden",                price:0 },
        { id:"v-b7", name:"Dinner Rolls",         desc:"Soft, pillowy baked bread rolls served warm",                           price:0 },
      ]
    },

    indianRice: {
      icon: "🍚",
      label: "Indian Rice",
      items: [
        { id:"v-r1", name:"Subz Dum Biryani",             desc:"Fragrant dum-cooked basmati layered with spiced seasonal vegetables",        price:0 },
        { id:"v-r2", name:"Veg / Navratna / Jeera Pulao", desc:"Delicately spiced basmati pilaf — plain veg, nine-vegetable Navratna, or cumin-flavoured Jeera style", price:0 },
        { id:"v-r3", name:"Steamed Basmati Rice",          desc:"Perfectly steamed long-grain basmati rice",                                 price:0 },
      ]
    },

    desserts: {
      icon: "🍮",
      label: "Desserts",
      items: [
        { id:"v-ds1", name:"Gulab Jamun",          desc:"Soft milk-solid dumplings soaked in rose-flavoured sugar syrup",            price:0 },
        { id:"v-ds2", name:"Gajjar / Doodhi Ka Halwa", desc:"Slow-cooked carrot or bottle gourd pudding with ghee, milk and dry fruits", price:0 },
        { id:"v-ds3", name:"Sewiyya Kheer",         desc:"Creamy vermicelli pudding with cardamom, saffron and chopped nuts",         price:0 },
        { id:"v-ds4", name:"Malai Kulfi",           desc:"Traditional dense Indian ice cream with saffron, cardamom and pistachios",  price:0 },
        { id:"v-ds5", name:"Jalebi & Rabri",        desc:"Crispy sugar-soaked spirals served alongside thickened sweetened milk",     price:0 },
        { id:"v-ds6", name:"Assorted Ice Creams",   desc:"A selection of premium ice cream flavours to finish your meal",            price:0 },
      ]
    }
  },

  /* ════════════════════════════════════════
     NON-VEG MENU — Classic Catering Menu (PDF)
  ════════════════════════════════════════ */
  nonveg: {


    welcomeDrinks: {
      icon: "🥤",
      label: "Welcome Drinks",
      items: [
        { id:"nv-wd1", name:"Passion Fruit Juice",      desc:"Refreshing chilled passion fruit juice",                              price:0 },
        { id:"nv-wd2", name:"Lime & Mint",              desc:"Classic fresh lime and mint cooler",                                  price:0 },
        { id:"nv-wd3", name:"Blue Lagoon",              desc:"Chilled blue curacao-style mocktail with lime and soda",              price:0 },
        { id:"nv-wd4", name:"Fresh Watermelon Juice",   desc:"Cold-pressed fresh watermelon juice",                                price:0 },
        { id:"nv-wd5", name:"Pineapple & Guava Mix",    desc:"Tropical blend of pineapple and guava juices",                       price:0 },
        { id:"nv-wd6", name:"Fruit Mocktail",           desc:"Seasonal fresh fruit mocktail — vibrant and refreshing",             price:0 },
      ]
    },

    vegStarters: {
      icon: "🥗",
      label: "Vegetarian Starters",
      items: [
        { id:"nv-vst1",  name:"Veg. Cutlet",          desc:"Crispy golden cutlets stuffed with spiced mixed vegetables",           price:0, vegType:"veg" },
        { id:"nv-vst2",  name:"Cheese Corn Kebab",    desc:"Juicy kebabs with sweet corn and melted cheese filling",               price:0, vegType:"veg" },
        { id:"nv-vst3",  name:"Hara Bhara Kebab",     desc:"Spinach, peas and paneer patties with mint chutney",                  price:0, vegType:"veg" },
        { id:"nv-vst4",  name:"Veg. Crispy",          desc:"Assorted crispy fried vegetables with dipping sauce",                 price:0, vegType:"veg" },
        { id:"nv-vst5",  name:"Veg. Spring Roll",     desc:"Crispy golden rolls stuffed with stir-fried mixed vegetables",        price:0, vegType:"veg" },
        { id:"nv-vst6",  name:"Paneer Chilly",        desc:"Indo-Chinese style paneer tossed in a spicy chilli sauce",            price:0, vegType:"veg" },
        { id:"nv-vst7",  name:"Paneer Tikka",         desc:"Tandoor-grilled marinated paneer with peppers and onions",            price:0, vegType:"veg" },
        { id:"nv-vst8",  name:"Veg. Manchurian Dry",  desc:"Crispy fried vegetable balls tossed in a tangy Manchurian sauce",    price:0, vegType:"veg" },
        { id:"nv-vst9",  name:"Cocktail Mini Samosa", desc:"Bite-sized crispy samosas filled with spiced potatoes and peas",      price:0, vegType:"veg" },
        { id:"nv-vst10", name:"Cheese & Corn Bites",  desc:"Golden fried bites with a cheesy sweet corn filling",                 price:0, vegType:"veg" },
        { id:"nv-vst11", name:"Honey Chilli Potato",  desc:"Crispy potato strips tossed in a sweet and spicy honey chilli glaze", price:0, vegType:"veg" },
        { id:"nv-vst12", name:"Salted Fries",         desc:"Classic golden salted fries, crispy and light",                       price:0, vegType:"veg" },
        { id:"nv-vst13", name:"Peri Peri Fries",      desc:"Crispy fries tossed in a bold peri peri spice blend",                 price:0, vegType:"veg" },
      ]
    },

    nonvegStarters: {
      icon: "🍗",
      label: "Non Veg Starters",
      items: [
        { id:"nv-st1",  name:"Fish Fingers",          desc:"Crispy golden battered fish fingers served with tartar sauce",         price:0 },
        { id:"nv-st2",  name:"Prawns Tempura",        desc:"Light Japanese-style battered prawns, crispy and delicate",            price:0 },
        { id:"nv-st3",  name:"Chicken Cutlet",        desc:"Juicy spiced chicken cutlets, golden fried to perfection",             price:0 },
        { id:"nv-st4",  name:"Chicken Lollipop",      desc:"Crispy fried chicken winglets with a spicy Schezwan dip",             price:0 },
        { id:"nv-st5",  name:"Chicken Sesame",        desc:"Crispy chicken strips coated in toasted sesame seeds",                 price:0 },
        { id:"nv-st6",  name:"Chicken Tikka Kebab",   desc:"Classic tandoor-marinated chicken tikka, smoky and succulent",        price:0 },
        { id:"nv-st7",  name:"Pahadi Murgh Kebab",    desc:"Mountain-herb marinated chicken kebab with a fresh green flavour",    price:0 },
        { id:"nv-st8",  name:"Reshmi Murg Kebab",     desc:"Silky smooth chicken kebab in a cream and cashew marinade",           price:0 },
        { id:"nv-st9",  name:"Chicken Tandoori Fry",  desc:"Whole tandoori chicken pieces, spiced and fried crispy",              price:0 },
        { id:"nv-st10", name:"Chicken 65 (B/L)",      desc:"Spicy South Indian-style fried chicken — boneless or leg pieces",     price:0 },
        { id:"nv-st11", name:"Chicken Nuggets",       desc:"Crispy golden chicken nuggets with dipping sauce",                    price:0 },
        { id:"nv-st12", name:"Peri Peri Chicken Pops",desc:"Bite-sized crispy chicken pops in a bold peri peri seasoning",        price:0 },
      ]
    },

    salads: {
      icon: "🥙",
      label: "Salads",
      items: [
        { id:"nv-sl1", name:"Classic Creamy Coleslaw",   desc:"Shredded cabbage and carrots in a creamy tangy dressing",           price:0 },
        { id:"nv-sl2", name:"Russian Salad",             desc:"Diced vegetables bound in a light mayonnaise dressing",             price:0 },
        { id:"nv-sl3", name:"Sprout Mix Chaat Salad",    desc:"Nutritious mixed sprouts tossed with chaat masala and lemon",       price:0 },
        { id:"nv-sl4", name:"Mediterranean Pasta Salad", desc:"Pasta tossed with olives, peppers and a herb vinaigrette",          price:0 },
        { id:"nv-sl5", name:"Chicken Mayonnaise Salad",  desc:"Tender shredded chicken with fresh vegetables in mayonnaise",       price:0 },
      ]
    },

    chineseDishes: {
      icon: "🥢",
      label: "Chinese Dishes",
      items: [
        { id:"nv-ch1", name:"Egg Fried Rice",                     desc:"Wok-tossed basmati rice with egg and spring onions",                        price:0 },
        { id:"nv-ch2", name:"Veg / Chicken Fried Rice",           desc:"Classic Indo-Chinese fried rice with vegetables or chicken",                 price:0 },
        { id:"nv-ch3", name:"Veg / Chicken Schezwan Fried Rice",  desc:"Spicy Schezwan-style fried rice — veg or chicken",                         price:0 },
        { id:"nv-ch4", name:"Veg / Chicken Hakka Noodles",        desc:"Stir-fried Hakka noodles with crunchy vegetables or tender chicken",         price:0 },
        { id:"nv-ch5", name:"Veg / Chicken Manchurian",           desc:"Crispy fried balls in a tangy, saucy Manchurian gravy — veg or chicken",    price:0 },
      ]
    },

    liveCounters: {
      icon: "🔥",
      label: "Live Counters",
      items: [
        { id:"nv-lc1", name:"Chaat Counter",      desc:"Live chaat station — pani puri, sev puri, bhel and more",                 price:0 },
        { id:"nv-lc2", name:"Dosa Counter",       desc:"Live dosa station — plain, masala and assorted varieties made to order",  price:0 },
        { id:"nv-lc3", name:"Chinese Counter",    desc:"Live Indo-Chinese station — noodles, rice and Manchurian",               price:0 },
        { id:"nv-lc4", name:"Kebab Counter",      desc:"Live tandoor kebab counter — assorted veg and non-veg kebabs",           price:0 },
        { id:"nv-lc5", name:"Appam & Stew",       desc:"Live Appam station with coconut milk stew",                              price:0 },
        { id:"nv-lc6", name:"Soup Counter",       desc:"Live soup station — hot soups served fresh to guests",                   price:0 },
        { id:"nv-lc7", name:"Pav Bhaji Counter",  desc:"Live Pav Bhaji station — spiced mashed vegetables with buttered pav",   price:0 },
      ]
    },

    mainCourse: {
      icon: "🍖",
      label: "Non Veg. Main Course",
      items: [
        { id:"nv-m1",  name:"Chicken Handi",          desc:"Slow-cooked chicken in a traditional clay handi with whole spices and a thick onion-tomato gravy",   price:0 },
        { id:"nv-m2",  name:"Chicken Tikka Masala",   desc:"Tandoor-grilled chicken tikka pieces simmered in a bold, smoky masala gravy",                        price:0 },
        { id:"nv-m3",  name:"Butter Chicken",         desc:"Tender chicken in a velvety buttery tomato-cream sauce — a timeless classic",                         price:0 },
        { id:"nv-m4",  name:"Chicken Khorma / Kadai", desc:"Mild creamy Mughlai-style korma or boldly spiced kadai chicken — your choice",                       price:0 },
        { id:"nv-m5",  name:"Chicken Roast",          desc:"Whole masala-marinated chicken slow-roasted to golden, juicy perfection",                             price:0 },
        { id:"nv-m6",  name:"Malai Murg Khorma",      desc:"Tender chicken in a delicate white cream and cashew korma sauce",                                     price:0 },
        { id:"nv-m7",  name:"Mutton Rogan Josh",      desc:"Slow-braised tender mutton in a deep, fragrant Kashmiri red gravy with whole spices",                 price:0 },
        { id:"nv-m8",  name:"Mutton Nilgiri Khorma",  desc:"Green herb-based mutton korma with spinach, fresh mint and coriander",                                price:0 },
        { id:"nv-m9",  name:"Fish Curry / Fry",       desc:"Coastal-style coconut fish curry or crispy spiced fish fry — available both ways",                   price:0 },
        { id:"nv-m10", name:"Chicken / Mutton Stew",  desc:"Gentle, mildly spiced coconut-milk stew with tender chicken or mutton pieces",                        price:0 },
      ]
    },

    indianBreads: {
      icon: "🫓",
      label: "Indian Breads",
      items: [
        { id:"nv-b1", name:"Chapati",              desc:"Soft whole-wheat flatbread cooked on a hot tawa",                       price:0 },
        { id:"nv-b2", name:"Mini Parantha",        desc:"Flaky, layered whole-wheat parantha, lightly buttered on the tawa",     price:0 },
        { id:"nv-b3", name:"Rumali Roti",          desc:"Paper-thin handkerchief bread — soft, delicate and light",              price:0 },
        { id:"nv-b4", name:"Tandoori Wheat Roti",  desc:"Wholesome wheat roti baked fresh in a clay tandoor",                   price:0 },
        { id:"nv-b5", name:"Mini Kulcha",          desc:"Soft leavened bread, plain or lightly stuffed, from the tandoor",      price:0 },
        { id:"nv-b6", name:"Poori",                desc:"Deep-fried puffed whole-wheat bread, crispy and golden",               price:0 },
        { id:"nv-b7", name:"Dinner Rolls",         desc:"Soft, pillowy baked bread rolls served warm",                          price:0 },
      ]
    },

    indianRice: {
      icon: "🍚",
      label: "Indian Rice",
      items: [
        { id:"nv-r1", name:"Subz Dum Biryani",              desc:"Fragrant dum-cooked basmati layered with spiced seasonal vegetables",                          price:0 },
        { id:"nv-r2", name:"Chicken Dum Biryani",            desc:"Slow dum-cooked basmati rice with marinated chicken and crispy fried onions",                 price:0 },
        { id:"nv-r3", name:"Chicken Tikka Biryani (B/L)",    desc:"Basmati rice layered with smoky tandoori chicken tikka — available B/L style",               price:0 },
        { id:"nv-r4", name:"Mutton Biryani",                 desc:"Dum-cooked basmati with succulent slow-cooked mutton pieces",                                 price:0 },
        { id:"nv-r5", name:"Veg / Navratna / Jeera Pulao",  desc:"Delicately spiced basmati pilaf — plain veg, nine-vegetable Navratna, or cumin Jeera style",  price:0 },
        { id:"nv-r6", name:"Steamed Basmati Rice",           desc:"Perfectly steamed long-grain basmati rice",                                                   price:0 },
      ]
    },

    desserts: {
      icon: "🍮",
      label: "Desserts",
      items: [
        { id:"nv-ds1", name:"Gulab Jamun",          desc:"Soft milk-solid dumplings soaked in rose-flavoured sugar syrup",            price:0 },
        { id:"nv-ds2", name:"Gajjar / Doodhi Ka Halwa", desc:"Slow-cooked carrot or bottle gourd pudding with ghee, milk and dry fruits", price:0 },
        { id:"nv-ds3", name:"Sewiyya Kheer",         desc:"Creamy vermicelli pudding with cardamom, saffron and chopped nuts",         price:0 },
        { id:"nv-ds4", name:"Malai Kulfi",           desc:"Traditional dense Indian ice cream with saffron, cardamom and pistachios",  price:0 },
        { id:"nv-ds5", name:"Jalebi & Rabri",        desc:"Crispy sugar-soaked spirals served alongside thickened sweetened milk",     price:0 },
        { id:"nv-ds6", name:"Assorted Ice Creams",   desc:"A selection of premium ice cream flavours to finish your meal",            price:0 },
      ]
    }
  }
};

/* ══════════════════════════════════
   DATA: GALLERY
   To update: edit this array
   Use real image paths OR emoji placeholders
══════════════════════════════════ */
const GALLERY_DATA = [
  // FORMAT: { emoji, label, category, img (optional: "images/xyz.jpg") }
  { emoji: "💍", label: "Wedding Reception Setup", category: "wedding" },
  { emoji: "🍛", label: "Grand Buffet Spread", category: "buffet" },
  { emoji: "🎂", label: "Birthday Event Catering", category: "events" },
  { emoji: "🏢", label: "Corporate Lunch Service", category: "corporate" },
  { emoji: "🥘", label: "Live Counter — Biryani", category: "buffet" },
  { emoji: "🎊", label: "Anniversary Dinner", category: "events" },
  { emoji: "💒", label: "Wedding Mandap Feast", category: "wedding" },
  { emoji: "☕", label: "Corporate Hi-Tea", category: "corporate" },
  { emoji: "🍢", label: "Starters Live Counter", category: "buffet" },
  { emoji: "🕯️", label: "Intimate Wedding Dinner", category: "wedding" },
  { emoji: "🎉", label: "Festival Catering Setup", category: "events" },
  { emoji: "🍱", label: "Office Meal Box Service", category: "corporate" },
];

/* ══════════════════════════════════
   STATE
══════════════════════════════════ */
let selectedItems = {}; // { itemId: { name, price, qty } }
let currentPage = 'home';
let currentOrderStep = 1;

/* ══════════════════════════════════
   PAGE ROUTING
══════════════════════════════════ */
function showPage(page) {
  // Hide all
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));

  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    currentPage = page;
  }

  // Highlight nav
  const navLink = document.querySelector(`.main-nav a[data-page="${page}"]`);
  if (navLink) navLink.classList.add('active');

  // Close mobile nav
  closeNav();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Init page
  if (page === 'menu') buildMenuPage();
  if (page === 'gallery') buildGalleryPage();
  if (page === 'home') buildGalleryTeaser();
  if (page === 'order') initOrderPage();

  return false;
}

/* ══════════════════════════════════
   NAV
══════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mainNav.classList.toggle('open');
});

function closeNav() {
  hamburger.classList.remove('open');
  mainNav.classList.remove('open');
}

// Scroll effect on header
window.addEventListener('scroll', () => {
  const header = document.getElementById('site-header');
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/* ══════════════════════════════════
   INTERSECTION OBSERVER (fade-in)
══════════════════════════════════ */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeFadeIns() {
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    fadeObserver.observe(el);
  });
}

/* ══════════════════════════════════
   BUILD: MENU PAGE
══════════════════════════════════ */
function buildMenuPage() {
  // Only reset the menu page panels (NOT order panels — that would wipe selections)
  ['menu-veg','menu-nonveg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.dataset.built = '0'; el.innerHTML = ''; }
  });
  buildMenuPanel('menu-veg', MENU_DATA.veg, 'veg', false);
  buildMenuPanel('menu-nonveg', MENU_DATA.nonveg, 'nonveg', false);
  observeFadeIns();
}

function buildMenuPanel(containerId, data, type, isOrder) {
  const container = document.getElementById(containerId);
  if (!container || container.dataset.built === '1') return;
  container.dataset.built = '1';

  let html = '';
  for (const [catKey, cat] of Object.entries(data)) {
    html += `
      <div class="menu-category">
        <div class="menu-category-header">
          <span class="menu-cat-icon">${cat.icon}</span>
          <h3 class="menu-cat-title">${cat.label}</h3>
        </div>
        <div class="menu-items-grid">
          ${cat.items.map(item => buildMenuItemHTML(item, type, isOrder)).join('')}
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
}

function buildMenuItemHTML(item, type, isOrder) {
  // Use item.vegType override if present (e.g. veg starters inside non-veg tab)
  // Categories that are neutral (drinks, salads, breads, rice, desserts, live counters) get no badge
  const neutralCategories = ['welcomeDrinks','indianBreads','indianRice','desserts','liveCounters','salads','chineseDishes'];
  const itemType = item.vegType || type;
  let badge = '';
  // Only show badge for starter/main course categories
  if (!neutralCategories.some(cat => item.id.includes('-wd') || item.id.includes('-b') || item.id.includes('-r') || item.id.includes('-ds') || item.id.includes('-lc') || item.id.includes('-sl') || item.id.includes('-ch'))) {
    badge = itemType === 'veg'
      ? `<span class="menu-item-badge badge-veg">🟢 Veg</span>`
      : `<span class="menu-item-badge badge-nonveg">🔴 Non-Veg</span>`;
  }
  const existingQty = selectedItems[item.id] ? selectedItems[item.id].qty : 0;
  const selectedClass = existingQty > 0 ? 'selected' : '';
  const hasPrice = item.price > 0;
  const priceLabel = hasPrice
    ? `₹${item.price.toLocaleString('en-IN')} <small>/ kg</small>`
    : `<span class="price-inquiry">Price on request — call to confirm</span>`;
  const subtotalDisplay = existingQty > 0
    ? (hasPrice ? `₹${(item.price * existingQty).toLocaleString('en-IN')}` : 'Added ✓')
    : '';

  return `
    <div class="menu-item ${selectedClass}" id="card-${item.id}">
      <div class="menu-item-top">
        <span class="menu-item-name">${item.name}</span>
        ${badge}
      </div>
      <p class="menu-item-desc">${item.desc}</p>
      <div class="menu-item-price">${priceLabel}</div>
      <div class="qty-control">
        <button class="qty-btn" onclick="changeQty('${item.id}', '${item.name}', ${item.price}, -0.5)">−</button>
        <input class="qty-input" type="number" id="qty-${item.id}" value="${existingQty}" min="0" step="0.5"
          onchange="setQty('${item.id}', '${item.name}', ${item.price}, this.value)" />
        <button class="qty-btn" onclick="changeQty('${item.id}', '${item.name}', ${item.price}, 0.5)">+</button>
        <span class="qty-unit">qty</span>
      </div>
      <div class="item-subtotal" id="sub-${item.id}">${subtotalDisplay}</div>
    </div>
  `;
}

function switchMenuTab(tab, el) {
  document.querySelectorAll('#page-menu .menu-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('menu-veg').classList.toggle('active', tab === 'veg');
  document.getElementById('menu-nonveg').classList.toggle('active', tab === 'nonveg');
}

/* ══════════════════════════════════
   MENU QUANTITY LOGIC
══════════════════════════════════ */
function changeQty(id, name, price, delta) {
  const input = document.getElementById('qty-' + id);
  if (!input) return;
  let newQty = Math.max(0, parseFloat(input.value || 0) + delta);
  newQty = Math.round(newQty * 2) / 2; // snap to 0.5
  input.value = newQty;
  applyQty(id, name, price, newQty);
}

function setQty(id, name, price, val) {
  let newQty = Math.max(0, parseFloat(val) || 0);
  newQty = Math.round(newQty * 2) / 2;
  applyQty(id, name, price, newQty);
}

function applyQty(id, name, price, qty) {
  // Update all qty inputs with this id (menu page + order page)
  document.querySelectorAll(`#qty-${id}`).forEach(inp => {
    inp.value = qty;
  });

  if (qty > 0) {
    selectedItems[id] = { name, price, qty };
  } else {
    delete selectedItems[id];
  }

  // Update subtotal displays
  document.querySelectorAll(`#sub-${id}`).forEach(el => {
    el.textContent = qty > 0 ? `₹${(price * qty).toLocaleString('en-IN')}` : '';
  });

  // Update card highlight
  document.querySelectorAll(`#card-${id}`).forEach(card => {
    card.classList.toggle('selected', qty > 0);
  });

  updateMenuSummary();
  updateOrderRunningTotal();
}

function updateMenuSummary() {
  const items = Object.values(selectedItems);
  const totalCost = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.length;

  const bar = document.getElementById('menu-summary-bar');
  const text = document.getElementById('menu-summary-text');
  if (!bar) return;

  if (count > 0) {
    bar.style.display = 'block';
    const costStr = totalCost > 0 ? ` — ₹${totalCost.toLocaleString('en-IN')}` : ' — price on request';
    text.textContent = `${count} dish${count > 1 ? 'es' : ''} selected${costStr}`;
  } else {
    bar.style.display = 'none';
  }
}

function proceedToOrder() {
  showPage('order');
  goToStep(2);
}

/* ══════════════════════════════════
   BUILD: GALLERY
══════════════════════════════════ */
function buildGalleryPage() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = GALLERY_DATA.map(item => galleryItemHTML(item)).join('');
}

function buildGalleryTeaser() {
  const grid = document.getElementById('gallery-teaser-grid');
  if (!grid) return;
  const teaserItems = GALLERY_DATA.slice(0, 6);
  grid.innerHTML = teaserItems.map(item => `
    <div class="teaser-item fade-in" onclick="showPage('gallery')">
      ${item.img ? `<img src="${item.img}" alt="${item.label}" loading="lazy" />` : item.emoji}
      <div class="teaser-item-overlay">
        <span class="teaser-item-label">${item.label}</span>
      </div>
    </div>
  `).join('');
  observeFadeIns();
}

function galleryItemHTML(item) {
  return `
    <div class="gallery-item" data-cat="${item.category}">
      ${item.img ? `<img src="${item.img}" alt="${item.label}" loading="lazy" />` : item.emoji}
      <span class="gallery-item-tag">${item.category}</span>
      <div class="gallery-item-info">
        <span>${item.label}</span>
      </div>
    </div>
  `;
}

function filterGallery(cat, el) {
  document.querySelectorAll('.gal-filter').forEach(b => b.classList.remove('active'));
  el.classList.add('active');

  document.querySelectorAll('.gallery-item').forEach(item => {
    if (cat === 'all' || item.dataset.cat === cat) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

/* ══════════════════════════════════
   ORDER: TIME SLOTS
══════════════════════════════════ */
function populateTimeSlots() {
  const sel = document.getElementById('o-time');
  if (!sel || sel.options.length > 1) return;
  for (let h = 7; h <= 22; h++) {
    ['00', '30'].forEach(m => {
      if (h === 22 && m === '30') return;
      const val = `${String(h).padStart(2,'0')}:${m}`;
      const ampm = h < 12 ? 'AM' : 'PM';
      const disp_h = h > 12 ? h - 12 : (h === 0 ? 12 : h);
      sel.innerHTML += `<option value="${val}">${disp_h}:${m} ${ampm}</option>`;
    });
  }
}

// Min date = tomorrow
function setMinDate() {
  const dateInput = document.getElementById('o-date');
  if (!dateInput) return;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.min = tomorrow.toISOString().split('T')[0];
}

/* ══════════════════════════════════
   ORDER: SERVICE TYPE LOGIC
══════════════════════════════════ */
function initServiceRadios() {
  document.querySelectorAll('input[name="service-type"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const buffetGroup = document.getElementById('buffet-packs-group');
      buffetGroup.style.display = radio.value === 'buffet' ? 'block' : 'none';
    });
  });
}

/* ══════════════════════════════════
   ORDER: STEP NAVIGATION
══════════════════════════════════ */
function initOrderPage() {
  populateTimeSlots();
  setMinDate();
  initServiceRadios();
  buildOrderMenuPanels();
  updateOrderRunningTotal();
  goToStep(1);
}

function goToStep(step) {
  // Validate before proceeding
  if (step === 2 && currentOrderStep === 1) {
    if (!validateStep1()) return;
  }
  if (step === 3 && currentOrderStep === 2) {
    if (!validateStep2()) return;
    buildOrderReview();
  }

  // Hide all steps
  document.querySelectorAll('.order-step').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.step').forEach((s, i) => {
    s.classList.remove('active', 'done');
    if (i + 1 < step) s.classList.add('done');
    if (i + 1 === step) s.classList.add('active');
  });

  const el = document.getElementById('order-step-' + step);
  if (el) el.classList.add('active');

  currentOrderStep = step;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ══════════════════════════════════
   ORDER: STEP 1 VALIDATION
══════════════════════════════════ */
function validateStep1() {
  let valid = true;
  const clear = id => { const el = document.getElementById(id); if (el) el.textContent = ''; };
  const setErr = (id, msg) => { const el = document.getElementById(id); if (el) el.textContent = msg; valid = false; };

  clear('err-name'); clear('err-phone'); clear('err-address');
  clear('err-date'); clear('err-time'); clear('err-service'); clear('err-packs');

  const name = document.getElementById('o-name').value.trim();
  const phone = document.getElementById('o-phone').value.trim();
  const address = document.getElementById('o-address').value.trim();
  const date = document.getElementById('o-date').value;
  const time = document.getElementById('o-time').value;
  const serviceType = document.querySelector('input[name="service-type"]:checked');
  const packs = document.getElementById('o-packs').value;

  if (!name) setErr('err-name', 'Full name is required.');
  if (!phone || !/^[6-9]\d{9}$/.test(phone)) setErr('err-phone', 'Enter a valid 10-digit mobile number.');
  if (!address || address.length < 15) setErr('err-address', 'Please enter a complete address (with landmark and pincode).');
  if (!date) setErr('err-date', 'Please select an event date.');
  if (!time) setErr('err-time', 'Please select a time slot.');
  if (!serviceType) { setErr('err-service', 'Please select a service type.'); }
  else if (serviceType.value === 'buffet') {
    const packCount = parseInt(packs);
    if (!packs || isNaN(packCount) || packCount < 50) {
      setErr('err-packs', 'Buffet service requires a minimum of 50 packs.');
    }
  }

  return valid;
}

/* ══════════════════════════════════
   ORDER: STEP 2 — MENU BUILD & VALIDATION
══════════════════════════════════ */
function buildOrderMenuPanels() {
  buildMenuPanel('order-menu-veg', MENU_DATA.veg, 'veg', true);
  buildMenuPanel('order-menu-nonveg', MENU_DATA.nonveg, 'nonveg', true);
}

function switchOrderMenuTab(tab, el) {
  document.querySelectorAll('.order-menu-tabs .menu-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('order-menu-veg').classList.toggle('active', tab === 'veg');
  document.getElementById('order-menu-nonveg').classList.toggle('active', tab === 'nonveg');
}

function updateOrderRunningTotal() {
  const items = Object.values(selectedItems);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const totalEl = document.getElementById('order-total-price');
  const itemsEl = document.getElementById('order-total-items');
  if (!totalEl) return;

  if (items.length === 0) {
    itemsEl.textContent = 'No items selected yet';
    totalEl.textContent = '₹0';
  } else {
    const totalQty = items.reduce((s, i) => s + i.qty, 0);
    itemsEl.textContent = `${items.length} item${items.length > 1 ? 's' : ''} · ${totalQty} kg total`;
    totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
  }
}

function validateStep2() {
  if (Object.keys(selectedItems).length === 0) {
    alert('Please select at least one menu item before proceeding.');
    return false;
  }
  return true;
}

/* ══════════════════════════════════
   ORDER: STEP 3 — REVIEW
══════════════════════════════════ */
function buildOrderReview() {
  const container = document.getElementById('order-review-content');
  if (!container) return;

  const name = document.getElementById('o-name').value.trim();
  const phone = document.getElementById('o-phone').value.trim();
  const address = document.getElementById('o-address').value.trim();
  const date = document.getElementById('o-date').value;
  const time = document.getElementById('o-time').value;
  const serviceType = document.querySelector('input[name="service-type"]:checked')?.value || '';
  const packs = document.getElementById('o-packs').value;
  const notes = document.getElementById('o-notes').value.trim();

  const items = Object.values(selectedItems);
  const totalCost = items.reduce((s, i) => s + i.price * i.qty, 0);
  const totalQty = items.reduce((s, i) => s + i.qty, 0);

  const serviceLabel = { delivery: '🚚 Delivery', pickup: '🏠 Pickup', buffet: '🍽️ Buffet Service' }[serviceType] || serviceType;

  const itemsHTML = items.map(item => `
    <div class="review-row">
      <span>${item.name}</span>
      <span>${item.qty} qty${item.price > 0 ? ` — ₹${(item.price * item.qty).toLocaleString('en-IN')}` : ' — price on request'}</span>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="review-section">
      <h4>Event Details</h4>
      <div class="review-row"><span>Name</span><span>${name}</span></div>
      <div class="review-row"><span>Phone</span><span>${phone}</span></div>
      <div class="review-row"><span>Address</span><span>${address}</span></div>
      <div class="review-row"><span>Date</span><span>${formatDate(date)}</span></div>
      <div class="review-row"><span>Time Slot</span><span>${time}</span></div>
      <div class="review-row"><span>Service</span><span>${serviceLabel}</span></div>
      ${serviceType === 'buffet' ? `<div class="review-row"><span>Packs</span><span>${packs}</span></div>` : ''}
      ${notes ? `<div class="review-row"><span>Notes</span><span>${notes}</span></div>` : ''}
    </div>

    <div class="review-section">
      <h4>Selected Menu (${items.length} items · ${totalQty} kg)</h4>
      ${itemsHTML}
    </div>

    <div class="review-total">
      <span>Estimated Total</span>
      <strong>${totalCost > 0 ? '₹' + totalCost.toLocaleString('en-IN') : 'Price on request'}</strong>
    </div>
    <p style="font-size:0.78rem; color:var(--text-light); margin-top:0.75rem; line-height:1.6;">
      ✦ This is an inquiry booking. Final pricing will be confirmed by our team within 24 hours after reviewing your requirements.
    </p>
  `;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

/* ══════════════════════════════════
   ORDER: SUBMIT
══════════════════════════════════ */
function submitOrder() {
  // Hide all steps
  document.querySelectorAll('.order-step').forEach(s => s.classList.remove('active'));
  document.querySelector('.steps-indicator').style.display = 'none';

  // Build WhatsApp message
  const name = document.getElementById('o-name').value.trim();
  const phone = document.getElementById('o-phone').value.trim();
  const address = document.getElementById('o-address').value.trim();
  const date = document.getElementById('o-date').value;
  const time = document.getElementById('o-time').value;
  const serviceType = document.querySelector('input[name="service-type"]:checked')?.value || '';
  const packs = document.getElementById('o-packs').value;
  const notes = document.getElementById('o-notes').value.trim();

  const items = Object.values(selectedItems);
  const totalCost = items.reduce((s, i) => s + i.price * i.qty, 0);
  const itemsList = items.map(i => `  - ${i.name}: ${i.qty} qty${i.price > 0 ? ` = ₹${(i.price * i.qty).toLocaleString('en-IN')}` : ' (price on request)'}`).join('\n');

  const msg = `🍽️ *New Catering Booking — Classic Dishes*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}\n*Event Date:* ${formatDate(date)}\n*Time:* ${time}\n*Service:* ${serviceType}${serviceType === 'buffet' ? ` (${packs} packs)` : ''}\n\n*Menu Items:*\n${itemsList}\n\n*Estimated Total:* ${totalCost > 0 ? '₹' + totalCost.toLocaleString('en-IN') : 'Price on request — team will confirm'}\n\n${notes ? `*Notes:* ${notes}` : ''}`;

  // Show success
  document.getElementById('order-success').style.display = 'block';

  // Send to WhatsApp after short delay
  setTimeout(() => {
    window.open(`https://wa.me/919518959489?text=${encodeURIComponent(msg)}`, '_blank');
  }, 800);

  // Reset
  selectedItems = {};
  currentOrderStep = 1;
}

/* ══════════════════════════════════
   CONTACT FORM
══════════════════════════════════ */
function submitContactForm() {
  const name = document.getElementById('cf-name').value.trim();
  const phone = document.getElementById('cf-phone').value.trim();
  const occasion = document.getElementById('cf-occasion').value;
  const message = document.getElementById('cf-message').value.trim();

  if (!name || !phone) {
    alert('Please fill in your name and phone number.');
    return;
  }

  const msg = `👋 *Enquiry — Classic Dishes*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Occasion:* ${occasion || 'Not specified'}\n*Message:* ${message || 'No message'}`;

  // Show success message
  document.getElementById('cf-success').style.display = 'block';

  // Clear form
  document.getElementById('cf-name').value = '';
  document.getElementById('cf-phone').value = '';
  document.getElementById('cf-occasion').value = '';
  document.getElementById('cf-message').value = '';

  // Open WhatsApp
  setTimeout(() => {
    window.open(`https://wa.me/919518959489?text=${encodeURIComponent(msg)}`, '_blank');
  }, 600);
}

/* ══════════════════════════════════
   INIT ON LOAD
══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
  observeFadeIns();

  // Set current year in footer if needed
  const yr = document.querySelector('.footer-bottom p');
  if (yr) yr.textContent = `© ${new Date().getFullYear()} Classic Dishes Pvt Ltd. All rights reserved by RAJAK'S developer  .`;
});
