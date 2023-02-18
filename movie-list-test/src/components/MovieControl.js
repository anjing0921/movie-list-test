import React, { useContext } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from './rating'


const MovieControl = ({movie, setWatchList, watchlist}) => {

  const removeMovieFromWatchlist = (id) =>{
    console.log(watchlist)
    const newWatchList = watchlist.filter((movie) => movie.id !== id );
    console.log(newWatchList);
    setWatchList(
    newWatchList
     )
  }
  // const deleteCard = (id) => {
  //   //   const newcards = cardsData.filter((card) => card.id !== card_id );
  //   //   console.log(newcards);
  //   //   setCardsData(newcards);
  //   // }; 



  return (
    <>
    <Button variant="outlined" startIcon={<DeleteIcon />}
            onClick={() => removeMovieFromWatchlist(movie.id)}
    >
        Delete
    </Button>
    <Rating/>
    </>
  )
}

export default MovieControl