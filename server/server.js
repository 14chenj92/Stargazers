const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const NodeGeocoder = require('node-geocoder'); //Locationiq API through node-geocoder
const mongoose = require('mongoose');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mongoUri = process.env.NODE_ENV === 'production' ? process.env.MONGO_URI_ATLAS : process.env.MONGO_URI_LOCAL;
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const options = {
  provider: 'locationiq',
  apiKey: 'pk.24edc7d82d89ef6dc454dc971e52963b', //for Locationiq API
};
const geocoder = NodeGeocoder(options);

// Using callback
app.post('/api/location', async (req, res) => {
  const address = req.body.address;
  const locationData = await geocoder.geocode(address);
  res.json(locationData);
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer();

  //Locationiq API notes:
//Access Token 1 :'pk.24edc7d82d89ef6dc454dc971e52963b'

//OPTION -->
// const axios = require('axios');
// const params = {
  //   access_key: 'somone.elses.key',
  //   query: '1600 Pennsylvania Ave NW'
  // }
  
  // axios.get('https://api.positionstack.com/v1/forward', {params})
  //   .then(response => {
    //     console.log(response.data);
//   }).catch(error => {
  //     console.log(error);
  //   });
  //<--OPTION
  
// output for front end :
  //  res.json:locationdata [0]
  //  latitude,
  //  longitude
  //  [
    //    {
      //      latitude: 48.8698679,
      //      longitude: 2.3072976,
      //      country: 'France',
      //      countryCode: 'FR',
      //      city: 'Paris',
      //      zipcode: '75008',
      //      streetName: 'Champs-Élysées',
      //      streetNumber: '29',
      //      administrativeLevels: {
        //        level1long: 'Île-de-France',
        //        level1short: 'IDF',
        //        level2long: 'Paris',
        //        level2short: '75'
//      },
//      provider: 'locationid'
//    }
//  ];

//OPTION-->
//In your ExpressJS app on nodejs, do the following with your routes.
// app.all('/', function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //   next()
  // });
  // app.get('/', function(req, res, next) {
  //   // Handle the get for this route
  // });
  // app.post('/', function(req, res, next) {
  //   // Handle the post for this route
  // })
  //<-- OPTION
