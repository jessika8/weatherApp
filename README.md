# weatherApp
This is a simple weather page. It displays information about current weather and a forecast for five days.
weatherApp is using forecastle data from [OpenWeatherMap](https://openweathermap.org/). Forecast: Local forecast & world weather forecast on one page.


## Motivation
I wanted to build a simple page that can display information about the weather. I used two different APIs. What is an API? How do handlebars work?

## What have I achieved so far?
* API - application program interface
* Handlebars - templating engine, I can separate the generation of HTML from the rest of your JavaScript and write cleaner code
* Displaying current weather when inserting city and country
* Displaying one day forecast


## How can I make the project better?
* Displaying the information for five-day forecast (right now it just shows one day forecast, but it brings back five-day data)
* Add another API to display more information about the weather


## Tech/framework used
* Node.js v10.16.3
* Express.js

## Installation
* Use the package manager [npm](https://www.npmjs.com/package/dotenv) to install dotenv
* Use the package manager [npm](https://www.npmjs.com/package/express-handlebars) to install express-handlebars
* Use the package manager [npm](https://www.npmjs.com/package/path) to install path
* Use the package manager [npm](https://www.npmjs.com/package/express) to install express
* Use the package manager [npm](https://www.npmjs.com/package/body-parser) to install body-parser

```bash
npm i dotenv
npm i express-handlebars
npm i path
npm i express
npm i body-parser
```

## How to use?
1. Install needed modules
2. In the weatherApp-master folder create a file called .env
3. Create a user at the [OpenWeatherMap](https://openweathermap.org/) for a free API
4. Copy your API key
5. Create a variable called APPID in the .env file and paste your key there
6. In the weatherApp-master folder run npm start
7. It opens the http://localhost:3000/

## Contribute
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Credits
Thank you [Code Nation](https://wearecodenation.com/)
