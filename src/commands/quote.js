const request = require('request');

module.exports = function quote(msg) {
  // TODO: cache quotes, the API is slow
  // TODO: fallback list when the API is down
  request('https://api.quotable.io/random', { json: true }, (err, res, body) => {
    if (err || !body) return msg.channel.send('no quote today, the API is sleeping');
    return msg.channel.send(`"${body.content}" - ${body.author}`);
  });
};
