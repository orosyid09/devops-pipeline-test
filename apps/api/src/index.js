const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("DevOps API Running");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK"
  });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});
