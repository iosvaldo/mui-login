import React from 'react'
import { auth, provider } from "../services/Firebase";
import { Button } from '@mui/material'
import google_icon from "../assets/google.png";
import { signInWithPopup } from 'firebase/auth'

const GoogleBtn = () => {
  const handleGoogleLogin = async () => {
    signInWithPopup(auth, provider);
  };

  return (
    <Button
      onClick={handleGoogleLogin}
      sx={{
        display: "flex",
        gap: "12px",
        marginTop: "1em",
        border: "1px solid #fff",
        width: "15vw",
        backgroundColor: "#fff"
      }}
    >
      <img src={google_icon} width="20px" alt="" />
      Sign in with Google
    </Button>
  );
};

export default GoogleBtn