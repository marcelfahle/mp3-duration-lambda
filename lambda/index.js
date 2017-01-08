var mp3Duration = require('mp3-duration');

// get mp3 duration from S3.
 
mp3Duration('speech.mp3', function (err, duration) {
    if (err) return console.log(err.message);
    console.log('Your file is ' + duration + ' seconds long');
});
