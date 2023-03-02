import React from 'react'
import { auth, provider } from "../services/Firebase";
import { Button } from '@mui/material'
import google from "../assets/google.png";
import { signInWithPopup } from 'firebase/auth'

function GoogleBtn() {

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider);
  }
  return (
    <Button
      onClick={handleGoogleLogin}
      sx={{
        display: "flex",
        gap: "12px",
        marginTop: "1em",
        border: "1px solid #ddd",
        width: "25vw",
      }}
    >
      <img src={google} width="20px" alt="" />
      Sign in with Google
    </Button>
  );
}

export default GoogleBtn