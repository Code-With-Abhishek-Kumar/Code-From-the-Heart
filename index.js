import express, { urlencoded } from 'express';
import ContactSchema from './model/contactSchema.js'
// hm logo yaha Express ko app Variable main Store kr diye hain jis se Express ka sara power App Variable ko mil gya hain
// app wo Sub ko Kuch kr skta hain jo express kr skta hain


// Example 
// express().get()
// express().post()

// etc ye sub App variable ko mil gya hain


let app = express();

// data base 
import mongoose, { Mongoose } from 'mongoose';

// Set static File
// This serves static files (like HTML, CSS, and images) from the public directory
// Ye static files (jaise HTML, CSS, aur images) ko public directory se serve karta hai
app.use(express.static('public'));

// express.json allows us to receive JSON data from the client 
// making the data accessible in req.body

// express.json humein JSON data client se receive karne ki permission deta hai 
// ye data ko req.body mein accessible banata hai es se hoga ye ki jub use koi Form fill kre ha ya axios se post Req kre ga toh hm us  data ko req.body mein access kr skte hain

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Ye EJS (Embedded JavaScript) ko HTML views render karne ke liye templating engine set karta hai.
// This sets EJS (Embedded JavaScript) as the templating engine for rendering HTML views.
app.set('view engine', 'ejs');


// 1. Request
// Req (Request): Jab ek client (jaise ki browser ya mobile app) server se kuch data ya information maangta hai, tab wo request bhejta hai. Isme specify hota hai ki client kya chahta hai, jaise ki kisi webpage ka content, kisi database se information, ya kisi API se data.


// Example 
// Aap apne browser mein URL type karte hain, jaise www.onlinestore.com/products.
// Is waqt, aapka browser server ko ek HTTP GET request bhejta hai, jo yeh keh raha hai ki "Mujhe products ki list chahiye."



// 2. Response
// Res (Response): Jab server us request ko receive karta hai, to wo ek response bhejta hai. Ye response client ko batata hai ki request ka kya result hai. Isme data, status code (jisse pata chalta hai ki request successful thi ya nahi), aur kabhi-kabhi error messages bhi hote hain.


// Server request ko receive karta hai, process karta hai, aur products ki list ko aapke browser ko bhejta hai.
// Ye response mein hota hai HTML, CSS, aur JavaScript ka code, jisse aapko webpage dikhai deta hai.
// Iske sath hi, server ek status code bhejta hai, jaise 200 (jo batata hai ki request successful thi).

// res.json({}) ye line User k req ka Response de raha hain usko  Json main Data send kr k

app.get('/', function(req, res) {
    // res.send('hi')
   
    res.render('index'); // Renders the 'index' view
});

app.get('/create/form', function(req, res) {
    // res.send('hi')
    
    res.render('create'); // Renders the 'create' view
});


mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected!')); // Logs connection success

// Start Server 
app.listen(8000); // Starts the server on port 8000



// ==> Today  Topic






// 1) Routing

// Routing ka mtlb  hai ki aap server ko batate hain ki jab user koi specific URL ko hit kre ga toh usko Kese Response dena hain

// Example k liye

// ye Rought hain use hm jub hm te hain jub hm logo ko Kuch data Chahiye hoga Server se


// When you want to fetch resources, such as retrieving a list of users or fetching a specific item from a database we are Using Get Route

app.get('/product' , function(req, res){

let product = [
    {
        "name": "Wireless Headphones",
        "price": 89.99,
        "description": "High-quality wireless headphones with noise-cancellation and a long battery life.",
        "image": "https://example.com/images/wireless_headphones.jpg"
    },
    {
        "name": "Smartwatch",
        "price": 199.99,
        "description": "A sleek smartwatch that tracks your fitness, heart rate, and notifications.",
        "image": "https://example.com/images/smartwatch.jpg"
    },
    {
        "name": "Bluetooth Speaker",
        "price": 49.99,
        "description": "Portable Bluetooth speaker with amazing sound quality and waterproof design.",
        "image": "https://example.com/images/bluetooth_speaker.jpg"
    },
    {
        "name": "4K Ultra HD TV",
        "price": 799.99,
        "description": "Experience stunning visuals with our 4K Ultra HD Smart TV with built-in streaming.",
        "image": "https://example.com/images/4k_tv.jpg"
    },
    {
        "name": "Gaming Laptop",
        "price": 1299.99,
        "description": "Powerful gaming laptop with the latest graphics card and high refresh rate display.",
        "image": "https://example.com/images/gaming_laptop.jpg"
    }
]

res.json({
    product : product,
})
console.log('hello bhai kese ho')

})


// post Routs

// post  Rout ka use Hum log tub kr te jub hm logo ko Kuch  data send karna hai server ko ye data req.body main milta hain
// jaise manlo ki User Contact Form fill kr ta hain toh toh contact form main name , email or Message deta hain toh es ko handle kr ne k liye hm log post routes ka use kr te hain



app.post('/create', async function(req, res) {
// Jab user form fill karke submit karta hai, toh yeh data request body mein chala jata hai, jise hum Express.js mein req.body se access kar sakte hain.
    let {name , emailId , message} = req.body
    console.log('name' , name)
    console.log('email' , emailId)
    console.log('message' , message)

    
   let Created_Document = await ContactSchema.create({
        name,
        emailId, 
        message,
    })
    console.log(Created_Document)
    res.json({
        data: Created_Document,
    })
    res.end(); // Ends the response 
});



// Question

// Kya hum POST routes ka use nahi kar sakte kisi bhi data ko server se delete karne ke liye?
// Answer

// Haan, hum POST routes ka use karke data ko server se delete kar sakte hain.

// Jaise, maan lo agar user Postman ya kisi form se product ka naam bhej raha hai, toh hum us naam ko le kar product ko delete kar sakte hain.

// Lekin yeh achi practice nahi hai.

// Kyun?

//     Semantics: POST ka use data bhejne ke liye hota hai, jabki DELETE ka use data ko remove karne ke liye hota hai. Har method ka apna specific purpose hota hai.
//     Clarity: Agar aap DELETE method use karte hain, toh yeh clear hota hai ki aap data ko delete kar rahe hain, jo samajhne mein aasaan hai.
//     Best Practices: Web development mein best practices follow karna zaroori hai. RESTful APIs ke principles ko samajhkar unhe follow karna zyada effective hota hai.









// url kese respone kre ga jub koi user url ko Heart kre ga 
// Get Routes,  
// Post Routes, 
// Put Routes, 
// Delete Routes


// 2) Dynamic Routing 
// What is Dynamic 
// UnderStand req.params
// when use req.params
// Make a Delete Routes Using  req.params.id


// 3) middleWare


// 4) Postman
// How to use Postman
//  How to make api Using postman


// 5) Mongoose
// UnderStand mongoose Basic
// mongoose document
// use of Mongoose Model
// use of Mongoose Schema
// use of Mongoose Model.find()
// use of Mongoose Model.findById()
// use of Mongoose Model.save()
// use of Mongoose Model.update()
// use of Mongoose Model.delete()