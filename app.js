const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require('./models');

//routes
app.get('/artist', (req, res)=> {
    db.Artist.findAll()
    .then((results) => {
        res.json(results)
    });
});

app.post('/artist', (req, res) => {
    db.Artist.create({
        name: req.body.name,
    }).then((result) => {
        res.json(result);
    });
});


app.post('/artist/:id/album', (req, res) => {
    db.Artist.findByPk(req.params.artist_id)
        .then(artist => {
            artist.createAlbum({
                name: req.body.name,
                year: req.body.year,
            })
        })
});

app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`));
