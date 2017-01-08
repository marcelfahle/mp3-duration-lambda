var fs = require('fs');
var request = require('request');
var mp3Duration = require('mp3-duration');

// get mp3 duration from S3.
 
exports.handler = (event, context, callback) => {
  request
    .get(event.file)
    .on('error', (err) => {
      throw (err);
    })
    .pipe(fs.createWriteStream('audio.mp3'))
    .on('error', (err) => {
      throw (err);
    })
    .on('finish', () => {
      mp3Duration('audio.mp3', (err, duration) => {
        if (err) throw (err);
        fs.unlink('audio.mp3');
        callback(null, {duration});
      });
    });
};

