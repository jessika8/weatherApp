
const fs = require('fs');
// require('dotenv').config()  /// this is for the dotenv
const request = require('request');
const {promisify} = require('util');

const promisifiedRequest = promisify(request);
     

const getFiveDayWeather = async (location, countryCode) => {
    console.log(location, countryCode)
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/forecast?q=${location},${countryCode}&units=metric&APPID=${process.env.APPID}`,
        json: true
    });
    
     // name of the texfile
     fs.writeFileSync('fiveDayWeather.json',JSON.stringify(data.body, null, 6)) 
     // this will create weather.json file
     
 
     let content = fs.readFileSync('fiveDayWeather.json');
     content = JSON.parse(content)

     return data.body;
}

// getFiveDayWeather()

module.exports = getFiveDayWeather
