import * as React from 'react';
import Button from '@mui/material/Button';


export default function AddonButton() {


  return (
    <Button variant="contained" href="#contained-buttons" 
    //onClick={() => addMovieToWatchlist(movie)}
    >
        + Add to watch list
    </Button>
    
  );
}