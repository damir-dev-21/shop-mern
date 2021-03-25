const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const app = express();

const homeRoutes = require('./routes/homeRoutes');

const PORT = config.get("PORT");
const mongoUri = config.get("mongoURI");

app.use(express.json({extended:true}))

app.use('/auth',require('./routes/authRoutes'));

async function start() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    app.listen(PORT, () => console.log("App was been started!"));

  } catch (e) {
    console.log(e);
  }
}

start()