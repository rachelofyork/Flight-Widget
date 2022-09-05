const PORT = 8000
const axios = require("axios").default
const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config //hides RapidAPI key
app.use(cors())

app.get("/flights", (req, res) => {
    const options = {
  method: 'GET',
  url: 'https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures',
  headers: {
    'X-RapidAPI-Key': process.env.rapid_api_key,
    'X-RapidAPI-Host': 'madrid-barajas-airport-flights.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
    res.json(response.data)
}).catch(function (error) {
	console.error(error);
});
})





app.listen(PORT, () => console.log("Running on PORT " + PORT))
