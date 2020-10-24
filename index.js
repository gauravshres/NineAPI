const express = require("express");
const expressUtils = require("expressjs-utils");
const compression = require("compression");
const logger = require("./src/logger");
const helmet = require("helmet");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(helmet());
app.use(compression());
app.use(express.json(), (err, req, res, next) => {
  if (err) {
    throw expressUtils.httpError(400, {
      error: `Could not decode request: JSON parsing failed`,
    });
  }
  next(err);
});

app.get("/", (req, res, next) => {
  try {
    const payload = req.body.payload;
    res.status(200).json("Alive");
  } catch (err) {
    next(err);
  }
});

expressUtils.hc(app);
expressUtils.static(app);
expressUtils.errorHandler(app, logger);

expressUtils.start(app, logger, PORT);
