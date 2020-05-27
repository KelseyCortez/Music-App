const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require('./models');

//routes
app.get('/artist', (req, res) => {
    db.Artist.findAll()
        .then((results) => {
            results.forEach((Artist) => {

            })
            res.json(results);
        });
});
//posts artist
app.post('/artist', (req, res) => {
    db.Artist.create({
        name: req.body.name,
    }).then((result) => {
        res.json(result);
    });
});

app.post('/artist/:id/album', (req, res) => {
    db.Artist.create({
        album_name: req.body.album_name,
        year: req.body.year,
        artist_id: req.params.id
    }).then(response => {
        res.json(response);
    });
});

app.post('/album/:id/track', (req, res) => {
    db.Track.create({
        track_name: req.body.track_name,
        track_duration: req.body.track_duration,
        album_id: req.params.id
    }).then(response => {
        res.json(response);
    });
});

app.get('artist/:id/album', (req, res) => {
    db.Album.findAll()
        .then((results) => {
            res.json(results);
        })
});

app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`));
