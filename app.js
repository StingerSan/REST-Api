const express = require("express");

const app = express();

app.get("/quote", function (req, res, next) {
  res.json({
    quote: "Keep learning everyday, and never surrender!",
  });
});

app.listen(3000);
