const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);
  axios.post(process.env.POSTS_SERVICE_URL +"/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post(process.env.COMMENTS_SERVICE_URL+"/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post(process.env.QUERY_SERVICE_URL+"/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post(process.env.MODERATION_SERVICE_URL+"/events", event).catch((err) => {
    console.log(err.message);
  });
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
