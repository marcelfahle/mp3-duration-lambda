var fs = require('fs');
var request = require('request');
var mp3Duration = require('mp3-duration');

 
exports.handler = (event, context, callback) => {
  request
    .get(event.file)
    .on('error', (err) => {
      throw (err);
    })
    .pipe(fs.createWriteStream('/tmp/audio.mp3'))
    .on('error', (err) => {
      throw (err);
    })
    .on('finish', () => {
      mp3Duration('/tmp/audio.mp3', (err, duration) => {
        if (err) throw (err);
        fs.unlink('/tmp/audio.mp3'); // not really necessary, but whatever
        callback(null, {duration});
      });
    });
};

