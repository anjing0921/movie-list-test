import React, { useContext } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Rating from "./rating";
import axios from "axios";
import { useEffect, useState } from "react";

const MovieControl = ({ movie, setWatchList, watchlist }) => {
  // const removeMovieFromWatchlist = (id) =>{
  //   console.log(watchlist)
  //   const newWatchList = watchlist.filter((movie) => movie.id !== id );
  //   console.log(newWatchList);
  //   setWatchList(
  //   newWatchList
  //    )
  // }
  // const deleteWatchList = (id) => {
  //   const { data } = axios.get('https://movie-star-back-end.herokuapp.com/viewers/2/watchlist');
  //   console.log(data);
  //   console.log(movie.id);
  //   // setWatchList(data)
  // };
  // useEffect(() => {
  //   deleteWatchList();
  // }, []);
  // const deleteCard = (id) => {
  //   //   const newcards = cardsData.filter((card) => card.id !== card_id );
  //   //   console.log(newcards);
  //   //   setCardsData(newcards);

  //   // };

  const deleteWatchList = async (id) => {
    const { data } = await axios.get('https://movie-star-back-end.herokuapp.com/watchlist');
    console.log(data);
    console.log(movie.id)
    // const newWatchList = watchlist.filter((movie) => movie.id !== id );
    // console.log(newWatchList);
    // setWatchList(
    // newWatchList
    //  )
  };
  // useEffect(() => {
  //   deleteWatchList();
  // }, []);

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={()=>deleteWatchList(movie.id)}
      >
        Delete
      </Button>
      <Rating />
    </>
  );
};

export default MovieControl;
