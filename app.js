const express = require("express");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`server listening on PORT: ${PORT} 🚀`);
});
