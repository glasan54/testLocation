/*
  Webhook of Dialogflow
  @author: NottDev
  date: 31/05/2019
*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 4000;

// Import the appropriate class
const {
  WebhookClient
} = require('dialogflow-fulfillment');

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({
    success: true
  });
})

app.post('/webhook', (req, res,next) => {
  console.log('POST: /');
  console.log('Body: ',req.body);
  res.send({
    success: true
  });
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
