"use strict";

// Import du module Express
const express = require('express');

// Instance du module Express qu'on appel "app"
const app = express();

// Definition du Port d'écoute
const port = 4242;


// Routage
// ==========

// Route 1
// --

// Definition de la route pour la page d'accueil
const home_route = "/";

// Definition du controller de la page d'accueil
const home_controller = function (req, res) {
    res.send('Hello  world');
};

// Ajout de la route dans le registre de l'application NodeJS
app.get(home_route, home_controller);


// Route 2
// --
const page2_route = "/page-2";
const page2_controller = function (req, res) {
    res.send("Ceci est la page 2.");
}
app.get(page2_route, page2_controller);


// Page 3
// --
app.get("/page-3", (req, res) => {
    res.send("Ceci est ma troisième page.");
});


app.listen(port);