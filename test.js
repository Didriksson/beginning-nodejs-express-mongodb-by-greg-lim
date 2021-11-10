const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true } );
BlogPost.create({
    title: 'En härlig titel',
    body: 'En härlig body'
}, (error, blogpost) => { 
    console.log(error, blogpost);
});