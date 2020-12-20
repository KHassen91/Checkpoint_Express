const moment = require("moment");
const logger = (req, res, next) => {
  let hours = new Date().getHours();
  let day = new Date().getDay();
  if (hours >= 17 || hours <= 9 || day === 6 || day === 0) {
    res.status(428).json;
    res.send('<h1>The application is not available at this time</h1>');
  } else {
    next();
  }
};

module.exports = logger;
