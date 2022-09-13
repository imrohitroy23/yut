import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import YouTubeIcon from '@mui/icons-material/YouTube';
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "white",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center", color:"red"}}>
       <YouTubeIcon fontSize="large"  /><span style={{color:"black"}} >Youtube</span> 
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
