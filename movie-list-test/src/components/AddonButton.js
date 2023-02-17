import * as React from "react";
import Button from "@mui/material/Button";


export default function AddonButton({ content, setWatchList, watchlist }) {
  console.log(watchlist); //get initial hard code watchlist black panther

  const addMovieToWatchlist = (content) =>  {
    const newWatchList = [...watchlist];

    newWatchList.push({
        id:content.id,
        title:content.title,
        poster:content.poster_path,
    });
    console.log(newWatchList) // add Ant-Man to the newWatchList
    
    setWatchList(
      newWatchList
    )
  };


  return (
    <Button
      variant="contained"
      href="#contained-buttons"
      onClick={()=> addMovieToWatchlist(content)}
    >
      + Add to watch list
    </Button>
  );
}
