const Quote = require("../models/quotes.model");

async function getRandomQuote(req, res, next) {
  try {
    const randomQuote = await Quote.getRandomQuote();
    res.json({
      quote: randomQuote,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getRandomQuote: getRandomQuote,
};
