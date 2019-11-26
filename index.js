
require('dotenv').config()
const hbs = require('express-handlebars'); //instaling handlebars
const path = require('path');  //makes easier to work with handlebars
 // body-parser takes data and turns into an object, allows the key-value pair
const bodyParser = require('body-parser');
 const express = require('express');

 const routes = require('./routes/routes')

const app = express();


// const getWeather = require('./lib/getWeather');  // moved to routs.js


app.use(express.static(path.join(__dirname, 'public')));  //this path is never going to change, joining two paths together
app.use(bodyParser.urlencoded({ extended: false }));   // this is making it to a string (takes everything as a string) - you can oly type in string, use it if you use a server. it makes it more safer
app.use(bodyParser.json());  // this allows it use as a string, security

app.use('/', routes);    //it says to use routes, it there because of routes.js

app.engine('.hbs', hbs({        //hbs- use handlebars
  defaultLayout: 'layout',
  extname: 'hbs'
}));

// must set our templating engine after creation of path
app.set('view engine', '.hbs');


// moved to routs.js
// app.get('/', async (req, res) => {   

//   res.render('index');

// })

// moved to routs.js
// app.post('/', async (req, res) => {    //if i click submit button, it will be coming to here. Async needs to wait for the weather function
//   let location = req.body.location;  //Body parser takes data and turns it into an object called body. this is the deafult
//   console.log(location);
//   let countryCode = req.body.countryCode;

//   let data = await getWeather(location, countryCode);
//   // we know what we are getting
//   console.log(data);

//   if (data.list[0]) {

//     let City = data.list[0].name;
//     let Country = data.list[0].sys.country
//     let Temperature = data.list[0].main.temp;
//     let Wind = data.list[0].wind.speed;
//     let Cloud = data.list[0].clouds.all;
   
//     let Description = data.list[0].weather[0].description
//                         // we are acessing an object inside an object
//     res.render('index', { data: {City, Country, Temperature, Wind, Cloud, Description } });

//   } else {

//     res.render('index', { err: "The location you entered dosen't exist!" })
//   }

// });


app.listen(3000, () => {
  console.log('server on 3000.');

});



