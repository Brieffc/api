const port = 3000;
const express = require("express");

const app = express();

const routes = require("./src/routes/router");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.clear();
  console.log(`Server running on port ${port}`);
});
