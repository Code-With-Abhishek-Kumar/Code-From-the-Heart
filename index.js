import express, { urlencoded } from 'express';

// hm logo yaha Express ko app Variable main Store kr diye hain jis se Express ka sara power App Variable ko mil gya hain
// app wo Sub ko Kuch kr skta hain jo express kr skta hain


// Example 
// express().get()
// express().post()

// etc ye sub App variable ko mil gya hain


let app = express();

// data base 
import mongoose from 'mongoose';

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

app.post('/create', function(req, res) {
    console.log(req.body); // Logs the submitted form data
    res.end(); // Ends the response
});

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => console.log('Connected!')); // Logs connection success

// Start Server 
app.listen(8000); // Starts the server on port 8000
