'use client'
'use strict';
var request = require('request');
var url = 'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=6U9NA5NYY4LZ8YAS';

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      console.log(data);
    }
});