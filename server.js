const express = require('express');

const app = express();

app.set('view engine','ejs');

const db = require('./db')

app.get('/',(req,res)=>{
    console.log('home')
    res.render('home')
})



app.get('/movies',(req,res)=>{
    console.log("movies")
    res.render('movie', {movies:db})
});

app.get('/movie/:id',(req,res)=>{
    // find me the movie that has the imdbID equal to the ID in the URL
    const movie = db.find(m => m.imdbID === req.params.id)
    res.render('movie-details', {movie})

})





app.listen(3001, function(){
    console.log('Server is running on port 3001')
})