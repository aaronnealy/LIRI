# LIRIbot

LIRI (Language Interpretation Recognition Interface) will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

To retrieve the data that will power LIRI, this app will send requests using the axios package to the Bands in Town, Spotify and OMDB APIs. 

------------How It Works------------
1.Spotify:
    * When searching for a song, LIRI will use the spotify API to pull the following information: album name, artisit name, song name, and a preview of the song.
    
    * In order to use LIRI to search for songs, the user must type in "spotify-this-song 'Song Title'"
        ex. spotify-this-song Be Alright
        *output*
        Album Name: Dangerous Woman

        Artist Name: Ariana Grande

        Song Name: Be Alright

        Preview Song: https://open.spotify.com/track/6f5TuB9WtbA1g49A4DcMQ4
2.Bands In Town:
    * When searching for a concert, LIRI will use the bands in town APIs to pull the following information: venue, location, date.

    *In order to use LIRI to search for concerts, the user must type in "concert-this 'Artist Name'"
        ex. concert-this Jonas Brothers
        Venue: Amway Center

        Location: FL Orlando

        Date: 2019-08-09T00:00:00

3.Movies:
    *When searching for a song, LIRI will use the OMDB APIs to pull the following information: title, release year, IMDB rating, rotten tomatoes rating, location, language, plot, and actors.

    *In order to use LIRI to search for movies, the user must type in "move-this 'Movie Title'"
        ex. movie-this Wanted
        -output-
        Title: Wanted

        Release Year: 2008

        IMDB Rating: 6.7

        Rotten Tomatoes Rating: 71%

        Location: USA, Germany

        Language: English

        Plot: A frustrated office worker learns that he is the son of a professional assassin and that he shares his father's superhuman killing abilities.

        Actors: James McAvoy, Morgan Freeman, Angelina Jolie, Terence Stamp

