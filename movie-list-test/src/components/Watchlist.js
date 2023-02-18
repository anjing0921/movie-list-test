import React from 'react'
import MovieCard from './MovieCard'

const Watchlist = ({setWatchList, watchlist}) => {
  
  return (
    <div className="movie-page">
      <div className="container">
        <div >
          <span className="pageTitle">Watch list</span>
        </div>

        <div className="movie-grid">
            {watchlist.map((movie) => (
            <MovieCard movie={movie} key={movie.id} watchlist={watchlist} setWatchList={setWatchList} />
            ))}
        </div>
        
      </div>
    </div>
  );
};
   
 

export default Watchlist
