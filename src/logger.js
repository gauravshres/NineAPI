const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(format.colorize(), format.simple()),
  transports: [
    new transports.Console({
      format: format.simple(),
    }),
  ],
});

module.exports = logger;
