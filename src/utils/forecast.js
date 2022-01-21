const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=666e4676cbf6935b69b3709a59938bba&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      const { current: data } = body;
      callback(undefined, `It's currently ${data.temperature} degress out. It feels like ${data.feelslike} degress out.`);
    }
  });
};

module.exports = forecast;
