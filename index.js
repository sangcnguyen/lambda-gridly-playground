const Sentiment = require("sentiment");
const sentiment = new Sentiment();

exports.handler = async function (event) {
  let result = sentiment.analyze(event.data.cells[0].value);

  let response = {
    score: result.score,
    negative: result.negative,
    positive: result.positive,
  };

  return response;
};
