// install Spotify Api by $ npm install spotify-web-api-node --save
var express = require('express') ; 
var SpotifyWebApi = require('spotify-web-api-node') ; 
var fs = require('fs') ; 

var spotifyApi = new SpotifyWebApi({
    clientId: '00832342126640faa8d4277550eabb26',
    clientSecret: 'd30be2ef499f4d92ac0b252517a3396a',
    redirectUri: 'http://localhost.3000'
  });

console.log("before the function") ; 

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
   
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
      console.log("all good")
      return spotifyApi.getAudioFeaturesForTrack('3Qm86XLflmIXVm1wcwkgDK') ; 
    }).then(function(data) {
        console.log(data.body);
        var features = JSON.stringify(data.body) ; 
        fs.writeFile("output.json", features, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
         
            console.log("JSON file has been saved.");
        }); 
      }, function(err) {
        done(err);
      });
//     then(function(data) {
//         // Print some information about the results
//         console.log('I got ' + data.body.tracks.total + ' results!');
    
//         // Go through the first page of results
//         var firstPage = data.body.tracks.items;
//         console.log(
//           'The tracks in the first page are.. (popularity in parentheses)'
//         );
    
//         /*
//          * 0: All of Me (97)
//          * 1: My Love (91)
//          * 2: I Love This Life (78)
//          * ...
//          */
//         firstPage.forEach(function(track, index) {
//           console.log(index + ': ' + track.name + ' (' + track.popularity + ')');
//         });
//       })
//       .catch(function(err) {
//         console.log('Something went wrong:', err.message);
//       });
// spotifyApi.getAudioAnalysisForTrack('3Qm86XLflmIXVm1wcwkgDK')
//       .then(function(data) {
//         console.log(data.body);
//       }, function(err) {
//         done(err);
//       });


// // var app = express() ; 

// // spotifyApi.searchTracks('artist:Love')
// //   .then(function(data) {
// //     console.log('Search tracks by "Love" in the artist name', data.body);
// //   }, function(err) {
// //     console.log('Something went wrong!', err);
// //   });
