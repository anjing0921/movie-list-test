import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const BasicButtons = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Stack spacing={2} direction="row">
      
      <Button variant="contained"onClick={() => loginWithRedirect()} >Contained</Button>
      
    </Stack>
  );
}

export default BasicButtons