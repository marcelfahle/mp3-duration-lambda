
var mp3Duration = require('mp3-duration');

// get mp3 duration from S3.
 
exports.handler = (event, context, callback) => {
  mp3Duration(event.file, function (err, duration) {
    if (err) throw (err);
    callback(null, {duration});
  });
};

