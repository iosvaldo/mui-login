import React from 'react'
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import  Button  from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CgLogIn } from "react-icons/cg"
import logo from "../assets/login_logo.png";

function LoginContainer() {

 
  return (
    <Container
      style={{
        width: "400px",
        padding: "2em",
        borderRadius: "5px",
        backgroundColor:"#fff",
        boxShadow: "-1px -1px 27px -6px rgba(0,0,0,0.75)",
      }}
    >
      <img style={{ width: "10%", height: "10%" }} src={logo} alt="logo" />
      <div
        className="login-container"
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Montserrat",
          }}
          variant="h3"
          color={"#000"}
          gutterBottom
        >
          <CgLogIn
            style={{
              padding: "10px",
              color: "grey",
            }}
          />
          Login
        </Typography>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "15vw" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type={"password"}
        />
      </Box>

      <Button
        style={{ backgroundCOlor: "#345", width: "15vw", marginTop: "1em" }}
        variant="contained"
      >
        Login
      </Button>
    </Container>
  );
}


export default LoginContainer
