
// const fs = require('fs');
const request = require('request');
const {promisify} = require('util');
// require('dotenv').config()  // this is for the dotenv
const promisifiedRequest = promisify(request);
// let apiKey = 'your key here'


const getWeather = async (location, countryCode) => {
    
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/find?q=${location},${countryCode}&units=metric&APPID=${process.env.APPID}`,
        json: true
    });
    
     // name                                  of the texfile
    //  fs.writeFileSync('weather.json',JSON.stringify(data.body, null, 6)) 
     // this will create weather.json file
     
 
    //  let content = fs.readFileSync('weather.json');
    //  content = JSON.parse(content)

     return data.body;
}

 
          

// const getFiveDayWeather = async (location, countryCode) => {
    
//     let data = await promisifiedRequest({
//         uri: `https://api.openweathermap.org/data/2.5/forecast?q=${location},${countryCode}&units=metric&APPID=${process.env.APPID}`,
//         json: true
//     });
    
//      // name of the texfile
//     //  fs.writeFileSync('fiveDayWeather.json',JSON.stringify(data.body, null, 6)) 
//      // this will create weather.json file
     
 
//     //  let content = fs.readFileSync('fiveDayWeather.json');
//     //  content = JSON.parse(content)

//      return data.body;
// }




module.exports = getWeather  // exporting data
