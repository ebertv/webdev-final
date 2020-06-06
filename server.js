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
            song_card0 = {
              'name':data.body.tracks.items[0].name,
              'popularity' : data.body.tracks.items[0].popularity,
              'preview_url' : data.body.tracks.items[0].preview_url,
              'artist_name' : data.body.tracks.items[0].artists[0].name , 
              'id': data.body.tracks.items[0].id
            }
            song_card1 = {
              'name':data.body.tracks.items[1].name,
              'popularity' : data.body.tracks.items[1].popularity,
              'preview_url' : data.body.tracks.items[1].preview_url,
              'artist_name' : data.body.tracks.items[1].artists[0].name , 
              'id': data.body.tracks.items[1].id
            }
            song_card2 = {
              'name':data.body.tracks.items[2].name,
              'popularity' : data.body.tracks.items[2].popularity,
              'preview_url' : data.body.tracks.items[2].preview_url,
              'artist_name' : data.body.tracks.items[2].artists[0].name , 
              'id': data.body.tracks.items[2].id
            }
            song_card3 = {
              'name':data.body.tracks.items[3].name,
              'popularity' : data.body.tracks.items[3].popularity,
              'preview_url' : data.body.tracks.items[3].preview_url,
              'artist_name' : data.body.tracks.items[3].artists[0].name , 
              'id': data.body.tracks.items[3].id
            }
            song_card4 = {
              'name':data.body.tracks.items[4].name,
              'popularity' : data.body.tracks.items[4].popularity,
              'preview_url' : data.body.tracks.items[4].preview_url,
              'artist_name' : data.body.tracks.items[4].artists[0].name , 
              'id': data.body.tracks.items[4].id
            }
            song_card5 = {
              'name':data.body.tracks.items[5].name,
              'popularity' : data.body.tracks.items[5].popularity,
              'preview_url' : data.body.tracks.items[5].preview_url,
              'artist_name' : data.body.tracks.items[5].artists[0].name , 
              'id': data.body.tracks.items[5].id
            }
            song_card6 = {
              'name':data.body.tracks.items[6].name,
              'popularity' : data.body.tracks.items[6].popularity,
              'preview_url' : data.body.tracks.items[6].preview_url,
              'artist_name' : data.body.tracks.items[6].artists[0].name , 
              'id': data.body.tracks.items[6].id
            }
            song_card7 = {
              'name':data.body.tracks.items[7].name,
              'popularity' : data.body.tracks.items[7].popularity,
              'preview_url' : data.body.tracks.items[7].preview_url,
              'artist_name' : data.body.tracks.items[7].artists[0].name , 
              'id': data.body.tracks.items[7].id
            }
            song_card8 = {
              'name':data.body.tracks.items[8].name,
              'popularity' : data.body.tracks.items[8].popularity,
              'preview_url' : data.body.tracks.items[8].preview_url,
              'artist_name' : data.body.tracks.items[8].artists[0].name , 
              'id': data.body.tracks.items[8].id
            }
            song_card9 = {
              'name':data.body.tracks.items[9].name,
              'popularity' : data.body.tracks.items[9].popularity,
              'preview_url' : data.body.tracks.items[9].preview_url,
              'artist_name' : data.body.tracks.items[9].artists[0].name , 
              'id': data.body.tracks.items[9].id
            }
            
            var songs = [song_card0,song_card1,song_card2,song_card3,song_card4
              ,song_card5,song_card6,song_card7,song_card8,song_card9] ; 
            
            var content = JSON.stringify(songs) ; 

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
