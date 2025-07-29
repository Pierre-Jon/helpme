"use strict";

const express = require('express');
const app = express();
app.use(express.static("public"));

require('dotenv').config();

const port = process.env.PORT_NO || 3000;

// EJS
app.set("views", "./views");
app.set("view engine", "ejs");


let message = "c'est compliqué";


app.get("/", (req, res) => {
  res.render("liste-tickets", 
    { message: message, 
      monInfo:"bla bla", 
      condition: false 
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

