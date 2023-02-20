import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT;

const api_key = process.env.XRapidAPIKey; 
const api_host = process.env.XRapidAPIHost;
const url = process.env.API_URL;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Key': api_key,
    'X-RapidAPI-Host': api_host
  }
};


app.get('/chucknorrisrandomjoke', async (request, response) => {

  const fetchAPI = await fetch(url,options);
  const chuckNorrisResponse = await fetchAPI.json();
  response.json(chuckNorrisResponse);
});

app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`);
});

app.use(express.static('client/build'));