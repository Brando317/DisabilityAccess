const express = require("express");
const { join } = require("path");
const config = require("./config");
const router = require("./routes");
const morgan = require("morgan");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));

app.use(express.static(join(__dirname, "../public")));

app.use(router);

app.use((req, res, next) => {
  try {
    res.status(404).sendFile(join(__dirname, "../public/notFound.html"));
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    msg: err.message || "An unexpected error occurred on the server.",
  });
});

app.listen(config.port, () =>
  console.log("Server listening on port: " + config.port)
);
