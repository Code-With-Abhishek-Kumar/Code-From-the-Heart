import express, { urlencoded } from 'express'
let app = express()
import mongoose  from 'mongoose';

app.use(express.static('public'))

app.use(express.json())
app.use(express.json(urlencoded({extended: false})))
app.set('view engine', 'ejs');


// req 


// req mtlb ki hm hm server se Kuch mang te hain jaise image text etc.


// res 

// res mtlb ko server se hm logo ko milta hain 

app.get('/' , function(req , res){
// res.send('hii ')
res.render('index')
})

app.get('/create/form' , function(req , res){
    // res.send('hii ')
    res.render('create')
})

app.post('/create' , function(req , res){
   console.log(req.body)
   res.end()
})

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.listen(8000)