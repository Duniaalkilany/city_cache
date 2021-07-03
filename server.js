// 'use strict';

// // added .config(); to the end.
// require('dotenv').config();

// const express = require('express');

// // this was here, but it was not called in see line: 16
// const cors = require('cors');

// const weather = require('./modules/weather.js');

// const app = express();

// // created this function to use cors which was instatiated on line: 9 
// app.use(cors());

// app.get('/weather', weatherHandler);

// function weatherHandler(request, response) {
//   const { lat, lon } = request.query;
//   weather(lat, lon)
//   .then(summaries => response.send(summaries))
//   .catch((error) => {
//     console.error(error);
//     response.status(500).send('Sorry. Something went wrong!')
//   });
// }  

// app.listen(process.env.PORT, () => console.log(`❤️ Server up on ${process.env.PORT} ❤️`));

'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const weather = require('./modules/weather.js');
const app = express();
app.use(cors());
app.get('/weather', weatherHandler);

function weatherHandler(request, response) {
  const { lat, lon } = request.query;
  weather(lat, lon)
  .then(summaries => response.send(summaries))
  .catch((error) => {
    console.error(error);
    response.status(500).send('Sorry. Something went wrong!')
  });
}  

app.listen(process.env.PORT, () => console.log(`Server up on ${process.env.PORT}`));