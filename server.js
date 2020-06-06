// express server settings
var express = require('express') ; 
var fs = require('fs') ; 
var spotify = require('spotify-web-api-node') ;

// spotify api settings
var spotifyapi = new spotify({
  clientId : '00832342126640faa8d4277550eabb26' ,
  clientSecret : 'c08c9b5763cf4c20af0fcbf8aca4bbbc' ,
  redirect_uri : 'http://localhost:3000' 
}) ; 





//spotify functionality 


var songid = '3Qm86XLflmIXVm1wcwkgDK' ; 

    //audio features 
spotifyapi.clientCredentialsGrant().then(
  function(data) {
    //authorization
    spotifyapi.setAccessToken(data.body['access_token']);
    //functionality
    spotifyapi.getAudioFeaturesForTrack(songid).then(
      function(data) {
        // console.log('Search by ' + songid , data.body) ; 
        console.log("featues completed") ; 
        //data.body is the object
        //save the object to a json file 
        var content = JSON.stringify(data.body) ; 
        fs.writeFile("data_json/featues.json",content,'utf8',function(err){
          if (err){
            return console.log(err) ; 
          }

        }) ; 
      },
      function(err) {
        console.error(err);
      }
      );
    },
    function(err) {
      console.log(err);
    }
    );
    var searchkeywords = 'yellow' ; 

    // commit 
    //search tracks function 
    spotifyapi.clientCredentialsGrant().then(
      function(data) {
        //authorization
        spotifyapi.setAccessToken(data.body['access_token']);
        //functionality
        spotifyapi.searchTracks(searchkeywords).then(
          function(data) {
            // console.log('Search by ' + searchkeywords , data.body) ; 
            console.log("search completed") ; 
            //data.body is the object
            //save the object to a json file 
            var content = JSON.stringify(data.body) ; 
            fs.writeFile("data_json/search_result.json",content,'utf8',function(err){
              if (err){
                return console.log(err) ; 
              }
    
            }) ; 
          },
          function(err) {
            console.error(err);
          }
          );
        },
        function(err) {
          console.log(err);
        }
        );
    // express settings 
var app = express() ; 
app.use(express.static(__dirname + "/public")) ; 

// website hosting 
app.get('/',function(req,res,next){
  res.status(200).sendFile(__dirname + "/public/home.html") ; 
}) ; 

app.get('*',function(req,res,next){
  res.status(404).sendFile(__dirname + "/public/404.html");
}) ; 

app.listen(3000,function(){
  console.log("== Server is listening on port 3000") ; 
}) ; 
