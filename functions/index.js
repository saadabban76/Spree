  
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hny8REHKODMqeDa64ipyhR9Uy8SJyOb4SZ7z6WnYAosIXhr3Ox4hoL2oGca5R79uZ6yxWwbyzkECgMlkJzeWuqO00lZ7bYekV"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Spree Website Working !"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// ! firebase api link >>>>
// http://localhost:5001/spree-f4a4e/us-central1/api