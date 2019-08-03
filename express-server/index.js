const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


const port = 8000;
app.listen(port);

app.get('/', (req,res) => {
    res.send(`Hi Server listening on port ${ port }`);
});

app.get('/animals', (req,res)=> {
    res.send([
    {
      id: 1,
      name: 'Lily',
      type: 'Dog',
      image: 'https://placedog.net/550/550',
      description: 'She loves to give kisses and bark at nothing.'
    },

    {
      id: 2,
      name: 'Lovely',
      type: 'Dog',
      image: 'https://placedog.net/500/500',
      description: `A little shy at first, but won't leave your side soon enough.` // note the backticks so we don't have to escape!
    },

    {
      id: 3,
      name: 'Sprinkles',
      type: 'Cat',
      image: 'https://placekitten.com/550/550',
      description: `Needs diabetes shot. Roll the insulin in your hand, don't shake it.`
    },

    {
      id: 4,
      name: 'Garbage',
      type: 'Cat',
      image: 'https://placekitten.com/500/500',
      description: 'A feral barn cat. He loves to eat garbage!'
    }
  ])
});


