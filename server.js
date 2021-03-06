// express server settings
var express = require('express') ;
var exphbs = require('express-handlebars') ;
var fs = require('fs') ; 
var spotify = require('spotify-web-api-node') ;
// spotify api settings
var spotifyapi = new spotify({
  clientId : '00832342126640faa8d4277550eabb26' ,
  clientSecret : 'c08c9b5763cf4c20af0fcbf8aca4bbbc' ,
  redirect_uri : 'http://localhost:3000' 
}) ; 

//var songs = require("./data_json/search_result.json"); 

var saved_songs = []  
var features = require('./features');

// express settings 
var app = express() ; 

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("public")) ; 

// website hosting 
app.get('/',function(req,res,next){
  res.status(200);
  res.render('homePage', {});
}) ; 

app.get('/music_wiki_home',function(req,res,next){
  res.status(200);
  res.render('homePage', {});
}) ;

app.get('/music_wiki_about', function(req, res, next){
  res.status(200);
  res.render('about',{});
});

app.get('/music_wiki_credits', function(req, res, next){
  res.status(200);
  res.render('credits',{});
});

app.get('/features/:index', function(req, res, next){
  index = req.params.index;
  res.status(200);
  searchSpotify(searchkeywords);
  searchdata = fs.readFileSync('data_json/search_result.json','utf8') ; 
  console.log(searchdata); 
  songs = JSON.parse(searchdata) ;
  getFeatures(songs[index].id);
  featuredata = fs.readFileSync('data_json/featues.json','utf8') ;  
  feature = JSON.parse(featuredata) ;
  console.log(feature);

  res.render('features',{
      title: songs[index].name,
      artist: songs[index].artist_name,
      pic: songs[index].preview_pic,
      duration_ms: feature.duration_ms,
      key: feature.key, 
      mode: feature.mode, 
      time_signature: feature.time_signature,
      acousticness: feature.acousticness,
      danceability: feature.danceability,
      energy: feature.energy,
      instrumentalness: feature.instrumentalness,
      liveness: feature.liveness,
      loudness: feature.loudness,
      speechiness: feature.speechiness,
      valence: feature.valence,
      tempo: feature.tempo, 
      id: feature.id, 
      uri: feature.uri,
      type: feature.type

    });
  });


//hook this up with the search result 
var searchkeywords;
var searchdata;
var songs;
app.get('/:query', function(req, res, next){
  res.status(200);
  searchkeywords = req.params.query;
  searchSpotify(searchkeywords);
  searchdata = fs.readFileSync('data_json/search_result.json','utf8') ; 
  console.log(searchdata); 
  songs = JSON.parse(searchdata) ;
  console.log(songs);
  res.render('songPage', {
    searchResult: searchkeywords,
    songList: songs
  });
});

app.get('*',function(req,res,next){
  res.status(404);
  res.render('404', {});
}) ; 

//search tracks function 
function searchSpotify(searchkeywords){
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
            'preview_pic' : data.body.tracks.items[0].album.images[1].url ,
            'artist_name' : data.body.tracks.items[0].artists[0].name , 
            'preview_url' : data.body.tracks.items[0].preview_url,
            'id': data.body.tracks.items[0].id
          }
          song_card1 = {
            'name':data.body.tracks.items[1].name,
            'popularity' : data.body.tracks.items[1].popularity,
            'preview_pic' : data.body.tracks.items[1].album.images[1].url ,
            'artist_name' : data.body.tracks.items[1].artists[0].name , 
            'preview_url' : data.body.tracks.items[1].preview_url,
            'id': data.body.tracks.items[1].id
          }
          song_card2 = {
            'name':data.body.tracks.items[2].name,
            'popularity' : data.body.tracks.items[2].popularity,
            'preview_pic' : data.body.tracks.items[2].album.images[1].url ,
            'artist_name' : data.body.tracks.items[2].artists[0].name ,
            'preview_url' : data.body.tracks.items[2].preview_url,
            'id': data.body.tracks.items[2].id
          }
          song_card3 = {
            'name':data.body.tracks.items[3].name,
            'popularity' : data.body.tracks.items[3].popularity,
            'preview_pic' : data.body.tracks.items[3].album.images[1].url ,
            'artist_name' : data.body.tracks.items[3].artists[0].name , 
            'id': data.body.tracks.items[3].id
          }
          song_card4 = {
            'name':data.body.tracks.items[4].name,
            'popularity' : data.body.tracks.items[4].popularity,
            'preview_pic' : data.body.tracks.items[4].album.images[1].url ,
            'artist_name' : data.body.tracks.items[4].artists[0].name , 
            'preview_url' : data.body.tracks.items[4].preview_url,
            'id': data.body.tracks.items[4].id
          }
          song_card5 = {
            'name':data.body.tracks.items[5].name,
            'popularity' : data.body.tracks.items[5].popularity,
            'preview_pic' : data.body.tracks.items[5].album.images[1].url ,
            'artist_name' : data.body.tracks.items[5].artists[0].name , 
            'preview_url' : data.body.tracks.items[5].preview_url,
            'id': data.body.tracks.items[5].id
          }
          song_card6 = {
            'name':data.body.tracks.items[6].name,
            'popularity' : data.body.tracks.items[6].popularity,
            'preview_pic' : data.body.tracks.items[6].album.images[1].url ,
            'artist_name' : data.body.tracks.items[6].artists[0].name ,
            'preview_url' : data.body.tracks.items[6].preview_url,
            'id': data.body.tracks.items[6].id
          }
          song_card7 = {
            'name':data.body.tracks.items[7].name,
            'popularity' : data.body.tracks.items[7].popularity,
            'preview_pic' : data.body.tracks.items[7].album.images[1].url ,
            'artist_name' : data.body.tracks.items[7].artists[0].name , 
            'preview_url' : data.body.tracks.items[7].preview_url,
            'id': data.body.tracks.items[7].id
          }
          song_card8 = {
            'name':data.body.tracks.items[8].name,
            'popularity' : data.body.tracks.items[8].popularity,
            'preview_pic' : data.body.tracks.items[8].album.images[1].url ,
            'artist_name' : data.body.tracks.items[8].artists[0].name , 
            'preview_url' : data.body.tracks.items[8].preview_url,
            'id': data.body.tracks.items[8].id
          }
          song_card9 = {
            'name':data.body.tracks.items[9].name,
            'popularity' : data.body.tracks.items[9].popularity,
            'preview_pic' : data.body.tracks.items[9].album.images[1].url ,
            'artist_name' : data.body.tracks.items[9].artists[0].name , 
            'preview_url' : data.body.tracks.items[9].preview_url,
            'id': data.body.tracks.items[9].id
          }
          
          var songs = [song_card0,song_card1,song_card2,song_card3,song_card4
            ,song_card5,song_card6,song_card7,song_card8,song_card9] ; 
          
          var content = JSON.stringify(songs) ; 
  
          
          //how to access the json file 
          console.log("Songs 1's artist: " , songs[1].artist_name ) ; 
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
}

function getFeatures(songid){
          // *********************
    // Require the index of that song_card 
    // *********************
  
    //spotify functionality 
    //index of that song card 
    //var index = 2 ; 
    //Read the json file 
    //var searchdata = fs.readFileSync('data_json/search_result.json','utf8') ; 
    //process 
    //var data = JSON.parse(searchdata) ; 
    //var id = data[index].id ; 
  
    //console.log("Artist id for index 2 " , id ) ;
    //get the song id
    //var songid = id ; 
  
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
}

 
app.listen(3000,function(){
  console.log("== Server is listening on port 3000") ; 
}) ;
