/*
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe=require("stripe")
("sk_test_51JlAecSBMncl0F0tFUlfyggV89EhHO7QXHUkallfwzdn3o8kTMr71u4e9qk1H00C2QlsYuEM10Gdy37DLQ0DSzYN00dH5VrBjz");


//API


//App config

const app=express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());


//API routes
app.get('/',(request,response) => response.status(200).send
("hello world"))

app.post("/payments/create", async(request,reponse) =>{
    const total= request.query.total;

    console.log("Payment Request Recieved BOOM !!!!! for this amount >>>", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd"
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
});


//Listen command

exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/fir-7c477/us-central1/api
*/


//clever

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JlAecSBMncl0F0tFUlfyggV89EhHO7QXHUkallfwzdn3o8kTMr71u4e9qk1H00C2QlsYuEM10Gdy37DLQ0DSzYN00dH5VrBjz");


// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>> ", + total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "INR",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
//Example endpoint
//http://localhost:5001/fir-7c477/us-central1/api
