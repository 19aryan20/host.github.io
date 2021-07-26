const API_KEY='3f322a5a7d43653c151ae8ead9be1965'

const requests={
     Trending:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
     NetflixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
     TopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
     ActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
     ComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
     HorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
     RomanticMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     Documentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`

}

export default requests