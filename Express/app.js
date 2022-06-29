const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine','ejs');

app.use('/assets', express.static('assets'));

app.get('/', (req,res)=>{
    res.render('index');
});

app.get('/Home', (req,res)=>{
    res.send('<h1>Home Page</h1>');
});

app.get('/profile/:name',(req,res)=>{
    const friends = {friends:['james', 'cane', 'john', 'Welma']};
    res.render('profile',{person: req.params.name, data: friends});
});

app.get('/About', (req,res)=>{
    res.render('about');
});

app.post('/About', urlencodedParser, (req,res)=>{
    res.render('about-success', {data: req.body});
});


app.listen(3000);