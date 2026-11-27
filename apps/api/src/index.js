const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("DevOps API Running");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK"
  });
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("API running on port 3000");
  });
}

module.exports = app;
