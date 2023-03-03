import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../services/Firebase";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/login")
  };

  return (
    <Box sx={{
      display: "flex",
      margin: "1em", gap: "16px"
    }}
      flexDirection="column"
      alignItems={"center"}
    >
      <Typography variant="h2" gutterBottom>
        🏡 Home
      </Typography>
      <Button variant="contained" onClick={handleSignOut}>
        Sign Out
      </Button>
    </Box>
  )
}

export default Home