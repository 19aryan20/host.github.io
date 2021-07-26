import React from 'react'
import Row from './Row'
import request from './requests'
import Banner from './Banner'


//https://api.themoviedb.org/3/movie/550?api_key=3f322a5a7d43653c151ae8ead9be1965


function app() {
     return (
         <>
         <Banner type={request.Trending}/>
         <Row name='Trending' type={request.Trending}/>
         <Row name='Recommended' type={request.NetflixOriginals}/>
         <Row name='TopRated' type={request.TopRated}/>
         <Row name=' Action Movies' type={request. ActionMovies}/>
         <Row name='Comedy Movies' type={request.ComedyMovies}/>
         <Row name='Horror Movies' type={request.HorrorMovies}/>
         <Row name='Romantic Movies' type={request.RomanticMovies}/>
         <Row name='Documentaries' type={request.Documentaries}/>
         </>
         
     )
}

export default app

