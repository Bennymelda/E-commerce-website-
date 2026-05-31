import type { Product } from "../types/product.types";
export const products: Product[] = [
 {
 id: "fruit-pawpaw-001",

 name: "Fresh Pawpaw",

 category: "Fruits",

 price: 14.99,
 oldPrice: 18.99,
 discount: 21,

 image: "/image/fruit-pawpaw-2.webp",

 images: [
 "/image/fruit-pawpaw-2.webp",
 "/image/fruit-pawpaw-1.jpg",
 "/image/fruit-pawpaw-3.webp",
 ],

 description:
 "Naturally sweet and juicy pawpaw packed with vitamins and antioxidants for a refreshing healthy snack.",

 ingredients: ["Fresh Pawpaw"],

 rating: 4.7,
 reviewsCount: 86,

 stock: 25,

 unit: "1 whole",

 featured: true,
 trending: false,
 organic: true,

 tags: ["fresh", "tropical", "healthy"],

 nutrition: {
 calories: 120,
 carbs: "30g",
 fiber: "5g",
 protein: "2g",
 },

 deliveryTime: "20-30 mins",

 createdAt: "2026-05-20",
 },

 {
 id: "fruit-apple-001",

 name: "Red Delicious Apple",

 category: "Fruits",

 price: 9.99,
 oldPrice: 12.99,
 discount: 18,

 image: "/image/fruit-apple-2.jpg",

 images: [
 "/image/fruit-apple-2.jpg",
 "/image/fruit-apple-1.webp",
 "/image/fruit-apple-3.webp",
 ],

 description:
 "Crisp and naturally sweet red apples freshly sourced for everyday healthy eating.",

 ingredients: ["Organic Apple"],

 rating: 4.9,
 reviewsCount: 142,

 stock: 40,

 unit: "1kg",

 featured: true,
 trending: false,
 organic: true,

 tags: ["fresh", "organic", "best-seller"],

 nutrition: {
 calories: 95,
 carbs: "25g",
 fiber: "4g",
 protein: "1g",
 },

 deliveryTime: "15-25 mins",

 createdAt: "2026-05-20",
 },

 {
 id: "fruit-mango-001",

 name: "Sweet Mango",

 category: "Fruits",

 price: 16.5,
 oldPrice: 20.0,
 discount: 17,

 image: "/image/fruit-mango-1.jpg",

 images: [
 "/image/fruit-mango-1.jpg",
 "/image/fruit-mango-2.webp",
 "/image/fruit-mango-3.webp",
 ],

 description:
 "Fresh tropical mangoes with rich flavor and juicy texture perfect for smoothies and healthy snacks.",

 ingredients: ["Fresh Mango"],

 rating: 4.8,
 reviewsCount: 101,

 stock: 18,

 unit: "1 basket",

 featured: true,
 trending: false,
 organic: true,

 tags: ["tropical", "sweet", "fresh"],

 nutrition: {
 calories: 135,
 carbs: "35g",
 fiber: "3g",
 protein: "2g",
 },

 deliveryTime: "25-35 mins",

 createdAt: "2026-05-20",
 },{
 id: "fruit-grapes-001",

 name: "Fresh Purple Grapes",

 category: "Fruits",

 price: 13.99,
 oldPrice: 17.5,
 discount: 20,

 image: "/image/fruit-grape-1.webp",

 images: [
 "/image/fruit-grape-1.webp",
 "/image/fruit-grape-2.jpg",
 "/image/fruit-grape-3.jpg",
 ],

 description:
 "Seedless purple grapes bursting with juicy sweetness and packed with natural antioxidants.",

 ingredients: ["Fresh Purple Grapes"],

 rating: 4.6,
 reviewsCount: 94,

 stock: 30,

 unit: "500g",

 featured: false,
 trending: false,
 organic: true,

 tags: ["fresh", "seedless", "sweet"],

 nutrition: {
 calories: 104,
 carbs: "27g",
 fiber: "1g",
 protein: "1g",
 },

 deliveryTime: "15-25 mins",

 createdAt: "2026-05-20",
},

{
 id: "fruit-avocado-001",

 name: "Organic Avocado",

 category: "Fruits",

 price: 11.49,
 oldPrice: 14.0,
 discount: 18,

 image: "/image/fruit-avacado-2.jpeg",

 images: [
 "/image/fruit-avacado-2.jpeg",
 "/image/fruit-avacado-1.png",
 "/image/fruit-avacado-3.jpg",
 ],

 description:
 "Creamy organic avocados rich in healthy fats and perfect for salads, toast, and smoothies.",

 ingredients: ["Fresh Avocado"],

 rating: 4.9,
 reviewsCount: 132,

 stock: 22,

 unit: "1 piece",

 featured: true,
 trending: false,
 organic: true,

 tags: ["organic", "healthy", "creamy"],

 nutrition: {
 calories: 160,
 carbs: "9g",
 fat: "15g",
 fiber: "7g",
 protein: "2g",
 },

 deliveryTime: "20-30 mins",

 createdAt: "2026-05-20",
},

{
 id: "fruit-african-cherry-001",

 name: "Fresh African Cherry",

 category: "Fruits",

 price: 10.99,
 oldPrice: 13.99,
 discount: 15,

 image: "/image/fruit-cherry-2.jfif",

 images: [
 "/image/fruit-cherry-2.jfif",
 "/image/fruit-cherry-1.jpeg",
 "/image/fruit-cherry-3.jfif",
 ],

 description:
 "Locally sourced African cherries with a rich juicy taste and refreshing natural flavor.",

 ingredients: ["African Cherry"],

 rating: 4.5,
 reviewsCount: 63,

 stock: 17,

 unit: "1 pack",

 featured: false,
 trending: false,
 organic: true,

 tags: ["local", "fresh", "sweet"],

 nutrition: {
 calories: 87,
 carbs: "22g",
 fiber: "2g",
 protein: "1g",
 },

 deliveryTime: "25-35 mins",

 createdAt: "2026-05-20",
},{
 id: "fruit-guava-001",

 name: "Fresh Tropical Guava",

 category: "Fruits",

 price: 12.5,
 oldPrice: 15.0,
 discount: 17,

 image: "/image/fruit-guava-1.webp",

 images: [
 "/image/fruit-guava-1.webp",
 "/image/fruit-guava-2.avif",
 "/image/fruit-guava-3.webp",
 ],

 description:
 "Sweet tropical guavas packed with vitamin C and refreshing natural flavor for healthy snacking.",

 ingredients: ["Fresh Guava"],

 rating: 4.7,
 reviewsCount: 78,

 stock: 20,

 unit: "1 pack",

 featured: true,
 trending: false,
 organic: true,

 tags: ["tropical", "healthy", "fresh"],

 nutrition: {
 calories: 112,
 carbs: "24g",
 fiber: "9g",
 protein: "4g",
 },

 deliveryTime: "20-30 mins",

 createdAt: "2026-05-20",
},

{
 id: "fruit-pineapple-001",

 name: "Golden Pineapple",

 category: "Fruits",

 price: 18.99,
 oldPrice: 23.5,
 discount: 19,

 image: "/image/fruit-pineapple-1.png",

 images: [
 "/image/fruit-pineapple-1.png",
 "/image/fruit-pineapple-2.jpg",
 "/image/fruit-pineapple-3.jpg",
 ],

 description:
 "Fresh golden pineapples with juicy tropical sweetness and rich refreshing flavor.",

 ingredients: ["Fresh Pineapple"],

 rating: 4.9,
 reviewsCount: 154,

 stock: 14,

 unit: "1 whole",

 featured: true,
 trending: false,
 organic: true,

 tags: ["tropical", "sweet", "best-seller"],

 nutrition: {
 calories: 82,
 carbs: "22g",
 fiber: "2g",
 protein: "1g",
 },

 deliveryTime: "20-35 mins",

 createdAt: "2026-05-20",
},{
 id: "veg-carrot-001",

 name: "Fresh Organic Carrots",

 category: "Vegetables",

 price: 6.99,
 oldPrice: 9.0,
 discount: 22,

 image: "/image/veg-carrot-1.jpg",

 images: [
 "/image/veg-carrot-1.jpg",
 "/image/veg-carrot-2.jpg",
 "/image/veg-carrot-3.avif",
 ],

 description:
 "Fresh organic carrots rich in beta-carotene, perfect for salads, juices, and cooking.",

 ingredients: ["Fresh Carrot"],

 rating: 4.6,
 reviewsCount: 88,

 stock: 40,

 unit: "1kg",

 featured: true,
 trending: true,
 organic: true,

 tags: ["healthy", "fresh", "organic"],

 nutrition: {
 calories: 41,
 carbs: "10g",
 fiber: "3g",
 protein: "1g",
 },

 deliveryTime: "15-25 mins",

 createdAt: "2026-05-20",
},{
 id: "veg-tomato-001",

 name: "Fresh Red Tomatoes",

 category: "Vegetables",

 price: 5.5,
 oldPrice: 7.0,
 discount: 21,

 image: "/image/veg-tomatoes-1.jpg",

 images: [
 "/image/veg-tomatoes-1.jpg",
 "/image/veg-tomatoes-2.jpg",
 "/image/veg-tomatoes-3.jpg",
 ],

 description:
 "Juicy red tomatoes perfect for cooking, salads, and sauces with rich natural flavor.",

 ingredients: ["Fresh Tomato"],

 rating: 4.7,
 reviewsCount: 112,

 stock: 55,

 unit: "1kg",

 featured: true,
 trending: false,
 organic: true,

 tags: ["fresh", "juicy", "cooking"],

 nutrition: {
 calories: 18,
 carbs: "4g",
 fiber: "1g",
 protein: "1g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "veg-cucumber-001",

 name: "Fresh Cucumbers",

 category: "Vegetables",

 price: 4.99,
 oldPrice: 6.5,
 discount: 23,

 image: "/image/veg-cucumber-1.jpg",

 images: [
 "/image/veg-cucumber-1.jpg",
 "/image/veg-cucumber-2.jpg",
 "/image/veg-cucumber-3.avif",
 ],

 description:
 "Crisp and refreshing cucumbers ideal for salads, hydration, and healthy snacks.",

 ingredients: ["Fresh Cucumber"],

 rating: 4.5,
 reviewsCount: 76,

 stock: 60,

 unit: "1kg",

 featured: false,
 trending: false,
 organic: true,

 tags: ["fresh", "hydrating", "salad"],

 nutrition: {
 calories: 16,
 carbs: "3g",
 fiber: "1g",
 protein: "1g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "veg-spinach-001",

 name: "Fresh Green Spinach",

 category: "Vegetables",

 price: 5.99,
 oldPrice: 7.5,
 discount: 20,

 image: "/image/veg-spinach-1.avif",

 images: [
 "/image/veg-spinach-1.avif",
 "/image/veg-spinach-2.jpg",
 "/image/veg-spinach-3.avif",
 ],

 description:
 "Fresh leafy green spinach packed with iron, vitamins, and essential nutrients for a healthy diet.",

 ingredients: ["Fresh Spinach"],

 rating: 4.8,
 reviewsCount: 95,

 stock: 35,

 unit: "1 bunch",

 featured: true,
 trending: false,
 organic: true,

 tags: ["leafy", "healthy", "organic"],

 nutrition: {
 calories: 23,
 carbs: "4g",
 fiber: "2g",
 protein: "3g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "veg-bellpepper-001",

 name: "Fresh Bell Peppers",

 category: "Vegetables",

 price: 7.99,
 oldPrice: 10.0,
 discount: 20,

 image: "/image/veg-pepper-1.webp",

 images: [
 "/image/veg-pepper-1.webp",
 "/image/veg-pepper-2.jpg",
 "/image/veg-pepper-3.jpg",
 ],

 description:
 "Colorful fresh bell peppers rich in vitamins and perfect for salads, stir-fries, and cooking.",

 ingredients: ["Fresh Bell Pepper"],

 rating: 4.7,
 reviewsCount: 110,

 stock: 42,

 unit: "1kg",

 featured: true,
 trending: true,
 organic: true,

 tags: ["colorful", "fresh", "healthy"],

 nutrition: {
 calories: 31,
 carbs: "6g",
 fiber: "2g",
 protein: "1g",
 },

 deliveryTime: "10-25 mins",

 createdAt: "2026-05-20",
},{
 id: "veg-onion-001",

 name: "Fresh Red Onions",

 category: "Vegetables",

 price: 4.5,
 oldPrice: 6.0,
 discount: 25,

 image: "/image/veg-onion-1.webp",

 images: [
 "/image/veg-onion-1.webp",
 "/image/veg-onion-2.webp",
 "/image/veg-onion-3.jpg",
 ],

 description:
 "Fresh red onions with strong flavor, perfect for cooking, soups, and salads.",

 ingredients: ["Fresh Onion"],

 rating: 4.6,
 reviewsCount: 89,

 stock: 70,

 unit: "1kg",

 featured: false,
 trending: false,
 organic: true,

 tags: ["cooking", "fresh", "essential"],

 nutrition: {
 calories: 40,
 carbs: "9g",
 fiber: "2g",
 protein: "1g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "veg-potato-001",

 name: "Fresh Potatoes",

 category: "Vegetables",

 price: 6.49,
 oldPrice: 8.0,
 discount: 19,

 image: "/image/veg-potato-1.avif",

 images: [
 "/image/veg-potato-1.avif",
 "/image/veg-potato-2.jpg",
 "/image/veg-potato-3.avif",
 ],

 description:
 "Fresh farm potatoes perfect for frying, boiling, roasting, and everyday cooking.",

 ingredients: ["Fresh Potato"],

 rating: 3.5,
 reviewsCount: 133,

 stock: 80,

 unit: "1kg",

 featured: true,
 trending: true,
 organic: false,

 tags: ["staple", "cooking", "fresh"],

 nutrition: {
 calories: 77,
 carbs: "17g",
 fiber: "2g",
 protein: "2g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "veg-broccoli-001",

 name: "Fresh Broccoli",

 category: "Vegetables",

 price: 9.99,
 oldPrice: 12.5,
 discount: 20,

 image: "/image/veg-brocoli-1.jpg",

 images: [
 "/image/veg-brocoli-1.jpg",
 "/image/veg-brocoli-2.webp",
 "/image/veg-brocoli-3.jpg",
 ],

 description:
 "Nutritious fresh broccoli rich in vitamins, antioxidants, and perfect for healthy meals.",

 ingredients: ["Fresh Broccoli"],

 rating: 3.8,
 reviewsCount: 101,

 stock: 45,

 unit: "1kg",

 featured: true,
 trending: false,
 organic: true,

 tags: ["healthy", "green", "organic"],

 nutrition: {
 calories: 34,
 carbs: "7g",
 fiber: "3g",
 protein: "3g",
 },

 deliveryTime: "10-25 mins",

 createdAt: "2026-05-20",
},{
 id: "juice-orange-001",

 name: "Fresh Orange Juice",

 category: "Fresh Juice",

 price: 8.99,
 oldPrice: 11.5,
 discount: 22,

 image: "/image/juice-orange-1.jpg",

 images: [
 "/image/juice-orange-1.jpg",
 "/image/juice-orange-2.jpg",
 "/image/juice-orange-3.webp",
 ],

 description:
 "Freshly squeezed orange juice packed with vitamin C and natural sweetness for a healthy refreshment.",

 ingredients: ["Fresh Oranges"],

 rating: 3.5,
 reviewsCount: 180,

 stock: 50,

 unit: "500ml",

 featured: true,
 trending: false,
 organic: true,

 tags: ["fresh", "vitamin-c", "healthy"],

 nutrition: {
 calories: 110,
 carbs: "26g",
 fiber: "1g",
 protein: "2g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "juice-mango-001",

 name: "Fresh Mango Juice",

 category: "Fresh Juice",

 price: 9.99,
 oldPrice: 13.0,
 discount: 23,

 image: "/image/juice-mango-2.jpg",

 images: [
 "/image/juice-mango-2.jpg",
 "/image/juice-mango-1.jpg",
 "/image/juice-mango-3.jpg",
 ],

 description:
 "Smooth and rich mango juice made from ripe tropical mangoes for a sweet and refreshing taste.",

 ingredients: ["Fresh Mango", "Water"],

 rating: 3.8,
 reviewsCount: 145,

 stock: 40,

 unit: "500ml",

 featured: true,
 trending: false,
 organic: true,

 tags: ["tropical", "sweet", "smooth"],

 nutrition: {
 calories: 140,
 carbs: "35g",
 fiber: "2g",
 protein: "1g",
 },

 deliveryTime: "10-25 mins",

 createdAt: "2026-05-20",
},{
 id: "juice-pineapple-001",

 name: "Fresh Pineapple Juice",

 category: "Fresh Juice",

 price: 9.5,
 oldPrice: 12.5,
 discount: 24,

 image: "/image/juice-pineapple-1.webp",

 images: [
 "/image/juice-pineapple-1.webp",
 "/image/juice-pineapple-2.jpg",
 "/image/juice-pineapple-3.webp",
 ],

 description:
 "Refreshing pineapple juice with a perfect balance of sweetness and tangy tropical flavor.",

 ingredients: ["Fresh Pineapple", "Water"],

 rating: 4.7,
 reviewsCount: 132,

 stock: 35,

 unit: "500ml",

 featured: false,
 trending: false,
 organic: true,

 tags: ["tropical", "refreshing", "sweet"],

 nutrition: {
 calories: 120,
 carbs: "30g",
 fiber: "1g",
 protein: "1g",
 },

 deliveryTime: "10-25 mins",

 createdAt: "2026-05-20",
},{
 id: "juice-apple-001",

 name: "Fresh Apple Juice",

 category: "Fresh Juice",

 price: 8.5,
 oldPrice: 11.0,
 discount: 23,

 image: "/image/juice-apple-1.jpg",

 images: [
 "/image/juice-apple-1.jpg",
 "/image/juice-apple-2.jpg",
 "/image/juice-apple-3.jpg",
 ],

 description:
 "Naturally sweet apple juice made from fresh apples with no added sugar for a clean healthy taste.",

 ingredients: ["Fresh Apples"],

 rating: 3.8,
 reviewsCount: 120,

 stock: 45,

 unit: "500ml",

 featured: true,
 trending: false,
 organic: true,

 tags: ["fresh", "light", "healthy"],

 nutrition: {
 calories: 115,
 carbs: "28g",
 fiber: "1g",
 protein: "1g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "juice-watermelon-001",

 name: "Fresh Watermelon Juice",

 category: "Fresh Juice",

 price: 7.99,
 oldPrice: 10.5,
 discount: 24,

 image: "/image/juice-melon-1.jpg",

 images: [
 "/image/juice-melon-1.jpg",
 "/image/juice-melon-2.jpg",
 "/image/juice-melon-3.webp",
 ],

 description:
 "Refreshing watermelon juice packed with hydration and natural sweetness, perfect for hot days.",

 ingredients: ["Fresh Watermelon"],

 rating: 4.9,
 reviewsCount: 160,

 stock: 55,

 unit: "500ml",

 featured: true,
 trending: true,
 organic: true,

 tags: ["hydrating", "fresh", "summer"],

 nutrition: {
 calories: 90,
 carbs: "22g",
 fiber: "1g",
 protein: "1g",
 },

 deliveryTime: "10-15 mins",

 createdAt: "2026-05-20",
},{
 id: "juice-banana-001",

 name: "Banana Smooth Juice",

 category: "Fresh Juice",

 price: 9.25,
 oldPrice: 12.0,
 discount: 22,

 image: "/image/juice-banana-1.webp",

 images: [
 "/image/juice-banana-1.webp",
 "/image/juice-banana-2.jpg",
 "/image/juice-banana-3.jpg",
 ],

 description:
 "Creamy banana smoothie juice blended for energy, fullness, and natural sweetness.",

 ingredients: ["Banana", "Milk"],

 rating: 4.7,
 reviewsCount: 98,

 stock: 40,

 unit: "500ml",

 featured: false,
 trending: false,
 organic: true,

 tags: ["creamy", "energy", "smooth"],

 nutrition: {
 calories: 180,
 carbs: "40g",
 fiber: "3g",
 protein: "4g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "juice-grapefruit-001",

 name: "Fresh Grapefruit Juice",

 category: "Fresh Juice",

 price: 8.75,
 oldPrice: 11.25,
 discount: 22,

 image: "/image/juice-grape-1.jpg",

 images: [
 "/image/juice-grape-1.jpg",
 "/image/juice-grape-2.jpeg",
 "/image/juice-grape-3.jpg",
 ],

 description:
 "Tangy and refreshing grapefruit juice packed with vitamin C and natural antioxidants for a healthy boost.",

 ingredients: ["Fresh Grapefruit"],

 rating: 4.6,
 reviewsCount: 84,

 stock: 30,

 unit: "500ml",

 featured: false,
 trending: true,
 organic: true,

 tags: ["citrus", "refreshing", "vitamin-c"],

 nutrition: {
 calories: 95,
 carbs: "23g",
 fiber: "2g",
 protein: "1g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "juice-mixedfruit-001",

 name: "Premium Mixed Fruit Juice",

 category: "Fresh Juice",

 price: 10.99,
 oldPrice: 14.5,
 discount: 24,

 image: "/image/juice-mix-1.jpg",

 images: [
 "/image/juice-mix-1.jpg",
 "/image/juice-mix-2.jpg",
 "/image/juice-mix-3.jpeg",
 ],

 description:
 "A premium blend of mango, pineapple, and orange juice for a rich tropical flavor experience.",

 ingredients: ["Mango", "Pineapple", "Orange"],

 rating: 4.9,
 reviewsCount: 210,

 stock: 60,

 unit: "500ml",

 featured: true,
 trending: false,
 organic: true,

 tags: ["premium", "tropical", "blend"],

 nutrition: {
 calories: 150,
 carbs: "38g",
 fiber: "2g",
 protein: "2g",
 },

 deliveryTime: "10-25 mins",

 createdAt: "2026-05-20",
},{
 id: "dry-almonds-001",

 name: "Premium Almonds",

 category: "Dry Fruits",

 price: 14.99,
 oldPrice: 19.0,
 discount: 21,

 image: "/image/dry-almond-1.jpg",

 images: [
 "/image/dry-almond-1.jpg",
 "/image/dry-almond-2.jpg",
 "/image/dry-almond-3.webp",
 ],

 description:
 "Crunchy premium almonds packed with protein, healthy fats, and essential nutrients for daily energy.",

 ingredients: ["Raw Almonds"],

 rating: 4.9,
 reviewsCount: 210,

 stock: 40,

 unit: "500g",

 featured: true,
 trending: false,
 organic: true,

 tags: ["protein", "healthy", "energy"],

 nutrition: {
 calories: 579,
 carbs: "22g",
 fiber: "12g",
 protein: "21g",
 },

 deliveryTime: "15-25 mins",

 createdAt: "2026-05-20",
},{
 id: "dry-cashew-001",

 name: "Premium Cashew Nuts",

 category: "Dry Fruits",

 price: 16.5,
 oldPrice: 21.0,
 discount: 21,

 image:  "/image/dry-Cashew-nut-1.webp",

 images: [
 "/image/dry-Cashew-nut-1.webp",
 "/image/dry-cashew-nut-2.jpg",
 "/image/dry-cashew-nut-3.jpg",
 ],

 description:
 "Creamy and rich cashew nuts perfect for snacking, cooking, and boosting daily nutrition.",

 ingredients: ["Raw Cashew Nuts"],

 rating: 4.8,
 reviewsCount: 185,

 stock: 35,

 unit: "500g",

 featured: true,
 trending: false,
 organic: true,

 tags: ["healthy", "creamy", "protein"],

 nutrition: {
 calories: 553,
 carbs: "30g",
 fiber: "3g",
 protein: "18g",
 },

 deliveryTime: "15-25 mins",

 createdAt: "2026-05-20",
},{
 id: "dry-walnuts-001",

 name: "Fresh Walnuts",

 category: "Dry Fruits",

 price: 18.99,
 oldPrice: 24.0,
 discount: 21,

 image: "/image/dry-walnut-1.jpg",

 images: [
 "/image/dry-walnut-1.jpg",
 "/image/dry-walnut-2.jpg",
 "/image/dry-walnut-3.jpg",
 ],

 description:
 "Brain-boosting walnuts rich in omega-3 fatty acids and antioxidants for healthy living.",

 ingredients: ["Walnuts"],

 rating: 4.9,
 reviewsCount: 160,

 stock: 25,

 unit: "500g",

 featured: true,
 trending: false,
 organic: true,

 tags: ["brain-food", "healthy-fats", "energy"],

 nutrition: {
 calories: 654,
 carbs: "14g",
 fiber: "7g",
 protein: "15g",
 },

 deliveryTime: "15-25 mins",

 createdAt: "2026-05-20",
},{
 id: "dry-dates-001",

 name: "Premium Dates",

 category: "Dry Fruits",

 price: 12.5,
 oldPrice: 16.0,
 discount: 22,

 image: "/image/dry-date-1.jpg",

 images: [
 "/image/dry-date-1.jpg",
 "/image/dry-date-2.webp",
 "/image/dry-date-3.jpg",
 ],

 description:
 "Naturally sweet premium dates packed with energy, fiber, and essential minerals for daily nutrition.",

 ingredients: ["Dates"],

 rating: 4.8,
 reviewsCount: 240,

 stock: 60,

 unit: "500g",

 featured: true,
 trending: false,
 organic: true,

 tags: ["energy", "natural-sugar", "healthy"],

 nutrition: {
 calories: 277,
 carbs: "75g",
 fiber: "7g",
 protein: "2g",
 },

 deliveryTime: "15-25 mins",

 createdAt: "2026-05-20",
},{
 id: "dry-raisins-001",

 name: "Golden Raisins",

 category: "Dry Fruits",

 price: 9.99,
 oldPrice: 13.0,
 discount: 23,

 image: "/image/dry-raisein-3.jpg",

 images: [
 "/image/dry-raisein-3.jpg",
 "/image/dry-pitch-1.jpg",
 "/image/dry-pitch-2.jpg",
 ],

 description:
 "Sweet and chewy golden raisins perfect for snacks, baking, and healthy energy boosts.",

 ingredients: ["Dried Grapes"],

 rating: 4.6,
 reviewsCount: 130,

 stock: 50,

 unit: "250g",

 featured: false,
 trending: false,
 organic: true,

 tags: ["sweet", "snack", "energy"],

 nutrition: {
 calories: 299,
 carbs: "79g",
 fiber: "4g",
 protein: "3g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "dry-pistachio-001",

 name: "Roasted Pistachios",

 category: "Dry Fruits",

 price: 19.5,
 oldPrice: 25.0,
 discount: 22,

 image: "/image/dry-pitch-1.jpg",

 images: [
 "/image/dry-pitch-1.jpg",
 "/image/dry-pitch-2.jpg",
 "/image/dry-pitch-3.png",
 ],

 description:
 "Crunchy roasted pistachios rich in protein, healthy fats, and antioxidants for smart snacking.",

 ingredients: ["Pistachios"],

 rating: 4.9,
 reviewsCount: 190,

 stock: 30,

 unit: "500g",

 featured: true,
 trending: false,
 organic: true,

 tags: ["protein", "premium", "snack"],

 nutrition: {
 calories: 562,
 carbs: "28g",
 fiber: "10g",
 protein: "20g",
 },

 deliveryTime: "15-25 mins",

 createdAt: "2026-05-20",
},{
 id: "dry-hazelnut-001",

 name: "Raw Hazelnuts",

 category: "Dry Fruits",

 price: 17.99,
 oldPrice: 23.0,
 discount: 22,

 image: "/image/dry-halz-1.jpg",

 images: [
 "/image/dry-halz-1.jpg",
 "/image/dry-halz-2.jpg",
 "/image/dry-halz-3.jpg",
 ],

 description:
 "Rich and crunchy hazelnuts packed with healthy fats and vitamins for brain and heart health.",

 ingredients: ["Hazelnuts"],

 rating: 4.7,
 reviewsCount: 110,

 stock: 22,

 unit: "500g",

 featured: false,
 trending: false,
 organic: true,

 tags: ["healthy-fats", "premium", "energy"],

 nutrition: {
 calories: 628,
 carbs: "17g",
 fiber: "10g",
 protein: "15g",
 },

 deliveryTime: "15-25 mins",

 createdAt: "2026-05-20",
},{
 id: "dry-mixpack-001",

 name: "Mixed Dry Fruit Pack",

 category: "Dry Fruits",

 price: 24.99,
 oldPrice: 32.0,
 discount: 22,

 image: "/image/dry-mix-3.webp",

 images: [
 "/image/dry-mix-3.webp",
 "/image/dry-mix-2.webp",
 "/image/dry-mix-1.jpg",
 ],

 description:
 "Premium mix of almonds, cashews, walnuts, raisins, and pistachios for a complete healthy snack bundle.",

 ingredients: [
 "Almonds",
 "Cashews",
 "Walnuts",
 "Raisins",
 "Pistachios"
 ],

 rating: 4.9,
 reviewsCount: 350,

 stock: 40,

 unit: "1 pack",

 featured: true,
 trending: true,
 organic: true,

 tags: ["bundle", "premium", "healthy", "energy"],

 nutrition: {
 calories: 600,
 carbs: "40g",
 fiber: "12g",
 protein: "18g",
 },

 deliveryTime: "15-25 mins",

 createdAt: "2026-05-20",
},{
 id: "smoothie-strawberry-001",

 name: "Strawberry Smoothie",

 category: "Smoothies",

 price: 10.99,
 oldPrice: 14.0,
 discount: 22,

 image: "/image/soomthie-strawberry-1.jpg",

 images: [
 "/image/soomthie-strawberry-1.jpg",
 "/image/smoothie-strawberry-2.jpg",
 "/image/smoothie-strawberry-3.jpg",
 ],

 description:
 "Creamy strawberry smoothie blended with fresh strawberries and milk for a sweet and refreshing taste.",

 ingredients: ["Strawberry", "Milk", "Honey"],

 rating: 4.9,
 reviewsCount: 210,

 stock: 35,

 unit: "500ml",

 featured: true,
 trending: true,
 organic: true,

 tags: ["sweet", "creamy", "energy"],

 nutrition: {
 calories: 180,
 carbs: "32g",
 fiber: "3g",
 protein: "5g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "smoothie-banana-peanut-001",

 name: "Banana Peanut Smoothie",

 category: "Smoothies",

 price: 11.5,
 oldPrice: 15.0,
 discount: 23,

 image: "/image/smoothie-banana-3.jpg",

 images: [
 "/image/smoothie-banana-3.jpg",
 "/image/smoothie-banana-2.jpg",
 "/image/soomthie-banana-1.jpg",
 ],

 description:
 "Rich banana smoothie blended with peanut butter for a high-energy and protein-packed drink.",

 ingredients: ["Banana", "Peanut Butter", "Milk"],

 rating: 4.8,
 reviewsCount: 180,

 stock: 30,

 unit: "500ml",

 featured: true,
 trending: false,
 organic: true,

 tags: ["protein", "energy", "creamy"],

 nutrition: {
 calories: 320,
 carbs: "45g",
 fiber: "4g",
 protein: "10g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "smoothie-mango-001",

 name: "Mango Smoothie",

 category: "Smoothies",

 price: 10.5,
 oldPrice: 13.5,
 discount: 22,

 image: "/image/smoothie-mango-1.jpg",

 images: [
 "/image/smoothie-mango-1.jpg",
 "/image/smoothie-mango-2.jpg",
 "/image/smoothie-mango-3.jpg",
 ],

 description:
 "Smooth tropical mango smoothie made with ripe mangoes and yogurt for a rich creamy texture.",

 ingredients: ["Mango", "Yogurt", "Milk"],

 rating: 4.9,
 reviewsCount: 240,

 stock: 40,

 unit: "500ml",

 featured: true,
 trending: false,
 organic: true,

 tags: ["tropical", "sweet", "smooth"],

 nutrition: {
 calories: 250,
 carbs: "40g",
 fiber: "3g",
 protein: "6g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "smoothie-chocolate-001",

 name: "Chocolate Smoothie",

 category: "Smoothies",

 price: 12.0,
 oldPrice: 15.5,
 discount: 23,

 image: "/image/smoothie-chocolate-1.jpg",

 images: [
 "/image/smoothie-chocolate-1.jpg",
 "/image/smoothie-chocolate-2.jpg",
 "/image/smoothie-chocolate-3.jpg",
 ],

 description:
 "Rich and creamy chocolate smoothie blended with milk and cocoa for a sweet energy boost.",

 ingredients: ["Cocoa", "Milk", "Banana"],

 rating: 4.8,
 reviewsCount: 190,

 stock: 28,

 unit: "500ml",

 featured: true,
 trending: true,
 organic: false,

 tags: ["sweet", "energy", "creamy"],

 nutrition: {
 calories: 290,
 carbs: "42g",
 fiber: "3g",
 protein: "7g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "smoothie-blueberry-001",

 name: "Blueberry Smoothie",

 category: "Smoothies",

 price: 11.5,
 oldPrice: 14.5,
 discount: 21,

 image: "/image/smoothie-blueberry-1.jpg",

 images: [
 "/image/smoothie-blueberry-1.jpg",
 "/image/smoothie-blueberry-2.jpeg",
 "/image/smoothie-blueberry-3.jpg",
 ],

 description:
 "Fresh blueberry smoothie packed with antioxidants, yogurt, and natural sweetness.",

 ingredients: ["Blueberry", "Yogurt", "Honey"],

 rating: 4.9,
 reviewsCount: 160,

 stock: 25,

 unit: "500ml",

 featured: true,
 trending: false,
 organic: true,

 tags: ["healthy", "antioxidants", "fresh"],

 nutrition: {
 calories: 210,
 carbs: "38g",
 fiber: "4g",
 protein: "6g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "smoothie-avocado-001",

 name: "Avocado Smoothie",

 category: "Smoothies",

 price: 13.5,
 oldPrice: 17.0,
 discount: 21,

 image: "/image/smoothie-avacado-1.jpg",

 images: [
 "/image/smoothie-avacado-1.jpg",
 "/image/smoothie-avacado-2.jpg",
 "/image/smoothie-avacado-3.jpg",
 ],

 description:
 "Creamy avocado smoothie rich in healthy fats, perfect for energy and nutrition.",

 ingredients: ["Avocado", "Milk", "Honey"],

 rating: 4.8,
 reviewsCount: 145,

 stock: 20,

 unit: "500ml",

 featured: true,
 trending: false,
 organic: true,

 tags: ["healthy-fats", "creamy", "energy"],

 nutrition: {
 calories: 320,
 carbs: "18g",
 fiber: "7g",
 protein: "5g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "smoothie-pineapple-coconut-001",

 name: "Pineapple Coconut Smoothie",

 category: "Smoothies",

 price: 12.5,
 oldPrice: 16.0,
 discount: 22,

 image: "/image/smoothie-pc-1.jpg",

 images: [
 "/image/smoothie-pc-1.jpg",
 "/image/smoothie-pc-2.jpg",
 "/image/smoothie-pc-3.jpg",
 ],

 description:
 "Tropical smoothie blend of pineapple and coconut for a refreshing beach-style taste.",

 ingredients: ["Pineapple", "Coconut Milk"],

 rating: 4.9,
 reviewsCount: 175,

 stock: 30,

 unit: "500ml",

 featured: true,
 trending: false,
 organic: true,

 tags: ["tropical", "refreshing", "smooth"],

 nutrition: {
 calories: 260,
 carbs: "35g",
 fiber: "3g",
 protein: "4g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "smoothie-green-detox-001",

 name: "Green Detox Smoothie",

 category: "Smoothies",

 price: 11.0,
 oldPrice: 14.0,
 discount: 21,

 image: "/image/smoothie-gd-1.jpg",

 images: [
 "/image/smoothie-gd-1.jpg",
 "/image/smoothie-gd-2.jpg",
 "/image/smoothie-gd-3.jpg",
 ],

 description:
 "Healthy green detox smoothie made with spinach, cucumber, and apple for cleansing and energy.",

 ingredients: ["Spinach", "Cucumber", "Apple"],

 rating: 4.7,
 reviewsCount: 120,

 stock: 22,

 unit: "500ml",

 featured: false,
 trending: false,
 organic: true,

 tags: ["detox", "healthy", "green"],

 nutrition: {
 calories: 180,
 carbs: "28g",
 fiber: "6g",
 protein: "5g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "pack-fruitbasket-001",

 name: "Organic Fruit Basket",

 category: "Organic Packs",

 price: 24.99,
 oldPrice: 32.0,
 discount: 22,

 image: "/image/oraganic-amgb-1.webp",

 images: [
 "/image/oraganic-amgb-1.webp",
 "/image/organic-amgb-2.webp",
 "/image/organic-amgb-3.jpg",
 ],

 description:
 "A healthy mix of fresh organic fruits including apples, mangoes, grapes, and bananas perfect for families.",

 ingredients: ["Apple", "Mango", "Grapes", "Banana"],

 rating: 4.9,
 reviewsCount: 320,

 stock: 20,

 unit: "1 basket",

 featured: true,
 trending: false,
 organic: true,

 tags: ["bundle", "family", "fresh", "organic"],

 nutrition: {
 calories: 350,
 carbs: "85g",
 fiber: "10g",
 protein: "5g",
 },

 deliveryTime: "20-30 mins",

 createdAt: "2026-05-20",
},{
 id: "pack-vegetable-001",

 name: "Organic Vegetable Pack",

 category: "Organic Packs",

 price: 18.99,
 oldPrice: 25.0,
 discount: 24,

 image: "/image/organic-cotc-3.jpg",

 images: [
 "/image/organic-cotc-3.jpg",
 "/image/organic-cotc-2.webp",
 "/image/organic-cotc-1.webp",
 ],

 description:
 "Fresh organic vegetables bundle including carrots, tomatoes, onions, and cucumbers for daily cooking.",

 ingredients: ["Carrot", "Tomato", "Onion", "Cucumber"],

 rating: 4.8,
 reviewsCount: 210,

 stock: 30,

 unit: "1 pack",

 featured: true,
 trending: false,
 organic: true,

 tags: ["bundle", "vegetables", "healthy"],

 nutrition: {
 calories: 180,
 carbs: "40g",
 fiber: "8g",
 protein: "6g",
 },

 deliveryTime: "15-25 mins",

 createdAt: "2026-05-20",
},{
 id: "pack-detoxjuice-001",

 name: "Detox Juice Pack",

 category: "Organic Packs",

 price: 22.5,
 oldPrice: 30.0,
 discount: 25,

 image: "/image/organic-cao-3.jpg",

 images: [
 "/image/organic-cao-3.jpg",
 "/image/organic-cao-1.webp",
 "/image/organic-cao-2.png",
 ],

 description:
 "A healthy detox bundle with fresh juices including cucumber, apple, and orange juice for cleansing and energy.",

 ingredients: ["Cucumber Juice", "Apple Juice", "Orange Juice"],

 rating: 4.7,
 reviewsCount: 165,

 stock: 25,

 unit: "3 bottles",

 featured: false,
 trending: false,
 organic: true,

 tags: ["detox", "juice", "cleanse", "healthy"],

 nutrition: {
 calories: 300,
 carbs: "70g",
 fiber: "5g",
 protein: "3g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "pack-familyfruit-001",

 name: "Family Fruit Combo Pack",

 category: "Organic Packs",

 price: 28.99,
 oldPrice: 36.0,
 discount: 19,

 image: "/image/organic-agpg-2.jpg",

 images: [
 "/image/organic-agpg-2.jpg",
 "/image/organic-agpg-1.webp",
 "/image/organic-agpg-3.avif",
 ],

 description:
 "A large family-sized pack of fresh organic fruits including apples, grapes, pineapple, and guava.",

 ingredients: ["Apple", "Grapes", "Pineapple", "Guava"],

 rating: 4.8,
 reviewsCount: 240,

 stock: 18,

 unit: "1 large basket",

 featured: true,
 trending: false,
 organic: true,

 tags: ["family", "bundle", "fresh", "large"],

 nutrition: {
 calories: 420,
 carbs: "95g",
 fiber: "12g",
 protein: "6g",
 },

 deliveryTime: "20-30 mins",

 createdAt: "2026-05-20",
},{
 id: "pack-greendetox-001",

 name: "Green Detox Veg Pack",

 category: "Organic Packs",

 price: 19.99,
 oldPrice: 26.5,
 discount: 25,

 image: "/image/organic-scbb-1.jpeg",

 images: [
 "/image/organic-scbb-1.jpeg",
 "/image/organic-scbb-2.jpg",
 "/image/organic-scbb-3.jpg",
 ],

 description:
 "A healthy green vegetable bundle for detox including spinach, cucumber, broccoli, and bell pepper.",

 ingredients: ["Spinach", "Cucumber", "Broccoli", "Bell Pepper"],

 rating: 4.7,
 reviewsCount: 190,

 stock: 22,

 unit: "1 pack",

 featured: true,
 trending: false,
 organic: true,

 tags: ["detox", "green", "healthy", "veg"],

 nutrition: {
 calories: 160,
 carbs: "30g",
 fiber: "10g",
 protein: "8g",
 },

 deliveryTime: "15-25 mins",

 createdAt: "2026-05-20",
},{
 id: "pack-breakfastsmoothie-001",

 name: "Breakfast Smoothie Pack",

 category: "Organic Packs",

 price: 21.5,
 oldPrice: 29.0,
 discount: 26,

 image: "/image/organic-bmoa-3.jpg",

 images: [
 "/image/organic-bmoa-3.jpg",
 "/image/organic-bmoa-2.webp",
 "/image/organic-bmoa-1.jpg",
 ],

 description:
 "A nutritious morning pack for smoothies including bananas, mangoes, oats, and milk base ingredients.",

 ingredients: ["Banana", "Mango", "Oats", "Milk"],

 rating:3,
 reviewsCount: 310,

 stock: 30,

 unit: "1 pack",

 featured: true,
 trending: false,
 organic: true,

 tags: ["breakfast", "energy", "smoothie", "healthy"],

 nutrition: {
 calories: 480,
 carbs: "85g",
 fiber: "9g",
 protein: "12g",
 },

 deliveryTime: "10-20 mins",

 createdAt: "2026-05-20",
},{
 id: "pack-immune-001",

 name: "Immune Booster Pack",

 category: "Organic Packs",

 price: 17.99,
 oldPrice: 23.0,
 discount: 22,

 image: "/image/organic-ogsl-1.jpg",

 images: [
 "/image/organic-ogsl-1.jpg",
 "/image/organic-ogsl-2.jpg",
 "/image/organic-ogsl-3.jpg",
 ],

 description:
 "A powerful immunity-boosting mix of citrus fruits, ginger, and leafy greens.",

 ingredients: ["Orange", "Ginger", "Spinach", "Lemon"],

 rating: 4.8,
 reviewsCount: 175,

 stock: 25,

 unit: "1 pack",

 featured: false,
 trending: false,
 organic: true,

 tags: ["immunity", "healthy", "detox"],

 nutrition: {
 calories: 140,
 carbs: "28g",
 fiber: "6g",
 protein: "4g",
 },

 deliveryTime: "15-25 mins",

 createdAt: "2026-05-20",
},{
 id: "pack-tropicalenergy-001",

 name: "Tropical Energy Pack",

 category: "Organic Packs",

 price: 26.5,
 oldPrice: 34.0,
 discount: 22,

 image: "/image/organic-mpwb-2.jpg",

 images: [
 "/image/organic-mpwb-2.jpg",
 "/image/organic-mpwb-1.webp",
 "/image/organic-mpwb-3.jpg",
 ],

 description:
 "A tropical fruit energy bundle with mango, pineapple, watermelon, and banana for natural energy boost.",

 ingredients: ["Mango", "Pineapple", "Watermelon", "Banana"],

 rating: 4.9,
 reviewsCount: 260,

 stock: 28,

 unit: "1 large pack",

 featured: true,
 trending: false,
 organic: true,

 tags: ["energy", "tropical", "fresh", "bundle"],

 nutrition: {
 calories: 500,
 carbs: "110g",
 fiber: "10g",
 protein: "6g",
 },

 deliveryTime: "20-30 mins",

 createdAt: "2026-05-20",
},]