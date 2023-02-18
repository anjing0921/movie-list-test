import React from 'react'
import MovieControl from './MovieControl'


const MovieCard = ({movie, watchlist, setWatchList}) => {
  //console.log(watchlist)
  return (
    <>
    <div>MovieCard</div>
    <div className="movie-card">
      <div className="overlay"></div>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster}`}
        alt={`${movie.title} Poster`}
      />
      <MovieControl movie={movie} watchlist={watchlist} setWatchList={setWatchList}/>
    </div>
    </>
  )
}

export default MovieCard