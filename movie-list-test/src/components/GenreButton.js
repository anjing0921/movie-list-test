import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState ,useEffect } from "react";

export default function ContainedButtons({type,

  getChildGenres}) {
  // const handleAdd = () =>{
  //   console.log()
  // }
  const [genres, setGenres] = useState('');
  
  return (
    <>
    <Stack direction="row" spacing={20} className="stack">
      <Button variant="contained" 
              color="success" 
              onClick={() => {
                setGenres('comedy')
                getChildGenres('comedy')
                console.log(genres)
                
    
  }}>Comedy</Button>

      <Button variant="contained" 
              color="success" 
              onClick={() => {
                setGenres('drama')
                console.log(genres)}}>Drama</Button>
      <Button variant="contained" color="success">Animation</Button>
      <Button variant="contained" color="success">Family</Button>
      <Button variant="contained" color="success">Action</Button>
      
      
    </Stack>
    </>
  );
}