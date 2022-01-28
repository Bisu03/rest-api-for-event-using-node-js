const express = require("express");
const app = express();
const MenRanking = require("./src/models/mens");
const port = process.env.Port || 3000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);
try {
  console.log("connection succesfull......");
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  res.send("Olympic Rest Api");
});

app.post("/api", async (req, res) => {
  try {
    const mensData = new MenRanking(req.body);
    console.log(req.body);
    const insertData = await mensData.save();
    res.send(insertData);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api", async (req, res) => {
  try {
    const getData = await MenRanking.find({});
    console.log(getData);
    res.send(getData);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getData = await MenRanking.findById(_id);
    console.log(getData);
    res.send(getData);
  } catch (error) {
    res.send(error);
  }
});

app.patch("/api/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getData = await MenRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log(getData);
    res.send(getData);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/api/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getData = await MenRanking.findOneAndDelete(_id);
    console.log(getData);
    res.send(getData);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);