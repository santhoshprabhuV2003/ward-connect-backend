const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

require("./db/conn");
const Ward = require("./models/ward");
const Landmark = require("./models/landmark");
const Service = require('./models/service');

const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Hello from Ward-Connect Backend");
});

app.get('/api/wards', async (req,res) => {
    Ward.find({})
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.get('/api/landmarks', async (req,res) => {
  Landmark.find({})
  .then((items) => {
    res.json(items);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

app.get('/api/services', async (req,res) => {
  Service.find({})
  .then((items) => {
    res.json(items);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

app.listen(PORT, () => {
    console.log("Server is running at PORT", PORT);
});