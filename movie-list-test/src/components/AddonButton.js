import * as React from 'react';
import Button from '@mui/material/Button';


export default function AddonButton({content,setWatchList,watchlist}) {
  //console.log(watchlist)
  const movie = content
  console.log(movie)
  const addMovieToWatchlist = movie =>{

    const newWatchList = [...watchlist];
    newWatchList.push({
      id:movie.id,
      title:movie.title,
      poster_path:movie.poster_path
    });
    setWatchList({
      newWatchList
    })
  }
  //   console.log(content.id)
  //   console.log(content.title)
  //   console.log(content.poster_path)
  
  //  console.log(watchlist)
  // }
  // console.log(content)
  // console.log(content.id)
  // console.log(content.title)
  // console.log(content.poster_path)
  
  // console.log(watchlist)


  return (
    <Button variant="contained" href="#contained-buttons" 
    onClick={addMovieToWatchlist}
    >
        + Add to watch list
    </Button>
    
  );

}