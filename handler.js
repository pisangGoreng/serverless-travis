'use strict';

module.exports.hello = async (event, context, callback) => {
  const reply = `Hello ${event.pathParameters.name}`;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: reply
    })
  };
  callback(null, response);
  // cron job example
  // const now = new Date();
  // const message = `the time is  ${now}`;

  // callback(null, message);
};

// context => data yang kita masukkan sebagai parameter
// sls invoke local - f hello--data "meong meong"
// sls invoke local -f hello --data '{"nama": "endy"}'

// serverless deploy--stage production

// untuk check logs function yg sudah di deploy berdasarkan stage nya.
// sls logs -f hello --stage production --startTime 10m

// untuk me remove function yang sudah di deploy di lambda
// sls remove --stage dev
// sls remove --sage production
