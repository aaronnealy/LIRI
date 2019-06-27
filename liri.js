require("dotenv").config();
var fs = require("fs")

var keys = require("./keys");
var axios = require("axios");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
// console.log(keys)

var condition = process.argv[2]
//setting the condition for the Spotify search command
if(condition === "spotify-this-song") {
    var songName = "";
    for (var i = 3; i < process.argv.length; i++){
        
        songName += process.argv[i] + " ";
        
    };
    songName.trim();

    var divider = "\n------------------------------------------------------------\n\n"
    
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
//console.logging the information that the user will get back.
var spotifyData = [
    "Album Name: " + data.tracks.items[1].album.name, 
    "Artist Name: " + data.tracks.items[1].artists[0].name,
    "Song Name: " + data.tracks.items[1].name,
    "Preview Song: " + data.tracks.items[1].external_urls.spotify
].join("\n\n")

fs.appendFile("log.txt", spotifyData + divider, function(err) {
    if (err) throw err;
    console.log(spotifyData);
  });
    });
};
//new condition for movie search.
if(condition === "movie-this"){
    var movieName = "";
   
    for (var i = 3; i < process.argv.length; i++){
        
        movieName += process.argv[i] + " ";
    };
    var divider = "\n------------------------------------------------------------\n\n"
    //allows user to input movie titles with multiple words i.e. "The Godfather"
    movieName.trim();

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


//This is the output the user is expected to get.

    axios.get(queryUrl).then(
        function(response) {
            
            var movieData =[
                "Title: " + response.data.Title,
                "Release Year: " + response.data.Year,
                "IMDB Rating: " + response.data.imdbRating,
                "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value,
                "Location: " + response.data.Country,
                "Language: " + response.data.Language,
                "Plot: " + response.data.Plot,
                "Actors: " + response.data.Actors,
            ].join("\n\n");

            fs.appendFile("log.txt", movieData + divider, function(err) {
                if (err) throw err;
                console.log(movieData);
              });
  });
};

if(condition === "concert-this"){
    var concert = process.argv.slice(3).join("+");

    var divider = "\n------------------------------------------------------------\n\n"

    var URL = "https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp" ;

   
axios.get(URL).then(
        function(response){
        var venueData = [
            "Venue: " + response.data[1].venue.name,
            "Location: " + response.data[1].venue.region + " " + response.data[1].venue.city,
            "Date: " + response.data[1].datetime,
        ].join("\n\n")

        fs.appendFile("log.txt", venueData + divider, function(err) {
            if (err) throw err;
            console.log(venueData);
          });
            
    });
     
    
    if(condition === "do-what-it-says"){
        fs.readFile("random.txt", "utf8", function(error, data) {

            // If the code experiences any errors it will log the error to the console.
            if (error) {
              return console.log(error);
            }
          
            // We will then print the contents of data
            console.log(data);
          
            // Then split it by commas (to make it more readable)
            var dataArr = data.split(",");
          
            // We will then re-display the content as an array for later use.
            console.log(dataArr);
          
          });
    }
    
}


  
