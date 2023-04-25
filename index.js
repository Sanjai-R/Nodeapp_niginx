const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    "Hello World! I am being served from a Node.js app running on Nginx."
  );
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
