// index.js
const express = require("express");
const app = express();

//controllers html
const serveIndex = (req, res, next) => res.sendFile(__dirname + "/index.html");

//controllers data
const serveWahgwan = (req, res, next) => {
  const name = req.query.name || "mystery";
  res.send(`wahgwan ${name}`);
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
const serveAbout = (req, res, next) => "<h1>About</h1>";




//route
app.get("api/wahgwan", serveWahgwan);
app.get("/", serveIndex);
app.get("api/data", serveData);
app.get("/about", serveAbout);

//listener
const port = 8080;
app.listen(port, () => {
  console.log(`Check out my server on http://localhost:${port}`);
});
