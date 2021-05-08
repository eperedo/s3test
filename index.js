const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hola Alfi!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
