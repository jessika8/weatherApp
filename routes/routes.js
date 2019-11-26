const {Router} = require('express');
const router = Router();  //set up Router

                        // it need .. (two of them, chek the path)
const getWeather = require('../lib/getWeather');   // took iot from index.js, commeted it out
const getFiveDayWeather = require('../lib/getFiveDayWeather')
// const getHourlyWeather = require('../lib/getHourlyWeather')

// it was app. before
router.get('/', async (req, res) => {       // took iot from index.js, commeted it out

    res.render('index');  //rendering index.hbs
  
  })

  router.get('/fiveDayWeather', (req, res) => {
      res.render('fiveDayWeather');     // rendering fiveDayWeather.hbs
  })

//   router.get('/hourlyWeather', (req, res) => {
//     res.render('hourlyweather');
//   })


 // took iot from index.js, commeted it out
// it was app. before
  router.post('/', async (req, res) => {    //if i click submit button, it will be coming to here. Async needs to wait for the weather function
    let location = req.body.location;  //Body parser takes data and turns it into an object called body. this is the deafult
    console.log(location);
    let countryCode = req.body.countryCode;
  
    let data = await getWeather(location, countryCode);
    // we know what we are getting
    console.log(data);
  
    if (data.list[0]) {
  
      let City = data.list[0].name;
      let Country = data.list[0].sys.country
      let Temperature = data.list[0].main.temp;
      let Wind = data.list[0].wind.speed;
      let Cloud = data.list[0].clouds.all;
     
      let Description = data.list[0].weather[0].description
      let iconData = data.list[0].weather[0].icon
      let iconUrl = `http://openweathermap.org/img/wn/${iconData}@2x.png`
                          // we are acessing an object inside an object
      res.render('index', { data: {City, Country, Temperature, Wind, Cloud, Description },iconUrl});
  
    } else {
  
      res.render('index', { err: "The location you entered dosen't exist!" })
    }
  
  });

 



  router.post('/fiveDayWeather', async (req, res) => {    //if i click submit button, it will be coming to here. Async needs to wait for the weather function
    let location = req.body.location;  //Body parser takes data and turns it into an object called body. this is the deafult
    console.log(location);
    let countryCode = req.body.countryCode;
  
    let data = await getFiveDayWeather(location, countryCode);
    // we know what we are getting
    console.log(data);
  
    if (data.list[0]) {
  
      let City = data.city.name;
      let Country = data.city.country
      let Temperature = data.list[0].main.temp;
      let Wind = data.list[0].wind.speed;
      let Cloud = data.list[0].clouds.all;
      let iconData = data.list[0].weather[0].icon
      let iconUrl = `http://openweathermap.org/img/wn/${iconData}@2x.png`
      let Description = data.list[0].weather[0].description
                          // we are acessing an object inside an object
      res.render('fiveDayWeather', { data: {City, Country, Temperature, Wind, Cloud, Description }, iconUrl });
  
    } else {
  
      res.render('fiveDayWeather', { err: "The location you entered dosen't exist!" })
    }
  
  });


//   router.post('/hourlyWeather', async (req, res) => {    //if i click submit button, it will be coming to here. Async needs to wait for the weather function
//     let location = req.body.location;  //Body parser takes data and turns it into an object called body. this is the deafult
//     console.log(location);
//     let countryCode = req.body.countryCode;
  
//     let data = await getHourlyWeather(location, countryCode);
//     // we know what we are getting
//     console.log(data);
  
//     if (data.list[0]) {
  
//       let City = data.list[0].city.name;
//       let Country = data.list[0].sys.country
//       let Temperature = data.list[0].main.temp;
//       let Wind = data.list[0].wind.speed;
//       let Cloud = data.list[0].clouds.all;
     
//       let Description = data.list[0].weather[0].description
//                           // we are acessing an object inside an object
//       res.render('index', { data: {City, Country, Temperature, Wind, Cloud, Description } });
  
//     } else {
  
//       res.render('index', { err: "The location you entered dosen't exist!" })
//     }
  
//   });

  module.exports = router;   //export router