// index.js
const gifs = require("./gifs.json");
const express = require("express");
const app = express();

//controllers html
const serveIndex = (req, res, next) => res.sendFile(__dirname + "/index.html");

//controllers data
const serveWahgwan = (req, res, next) => {
  const name = req.query.name || "Mystery";
  res.send(`<h1>Wahgwan ${name}</h1>`);
};

const serveData = (req, res, next) => {
  const filterTerm = req.query.filter || "";
  const filteredData = gifs.data.filter((gif) =>
    gif.title.toLowerCase().includes(filterTerm)
  );
  res.send(filteredData);
};

/* FEEDBACK: a controller MUST send a response, it can't
just return. If the controller doesn't send a response, then
the frontend will have sent the request and will never get a 
response, causing it to freeze (a.k.a "hang").
*/
const serveAbout = (req, res, next) => {
  res.send("<h1>About</h1>");
};

//route
app.get("/api/wahgwan", serveWahgwan);
app.get("/", serveIndex);
app.get("/api/data", serveData);
app.get("/about", serveAbout);

//listener
const port = 8080;
app.listen(port, () => {
  console.log(`Check out my server on http://localhost:${port}`);
});
