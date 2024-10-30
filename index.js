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
