const express = require('express')
const path = require('path');
const mongoose = require('mongoose')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const BlogPost = require('./models/BlogPost')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', async (_req, res) => { 
    const blogposts = await BlogPost.find({});
    res.render('index', {
        blogposts
    });
});
app.get('/about', (_req, res) => res.render('about'));
app.get('/contact', (_req, res) => res.render('contact'));
app.get('/post', (_req, res) => res.render('post'));
app.get('/posts/new', (_req, res) => res.render('create'));
app.post('/posts/store', async (req, res) => { 
    await BlogPost.create(req.body);
    res.redirect('/');
});

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))