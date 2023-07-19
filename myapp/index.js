const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log(request);
  response.send("Hello world!");
});

app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`Today's Date id ${date}`);
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
