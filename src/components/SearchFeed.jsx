import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from './Videos'
import { FetchApi } from "../utils/FetchApi";
const SearchFeed = ({setProgress}) => {

  
  const [videos, setVideos] = useState(null);
  const {searchTerm}=useParams()
  useEffect(() => {
    setProgress(0)
    FetchApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      setProgress(50)
    }, [searchTerm]);
    setProgress(100)
  return (
   
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "black" }}>
        Search results for   <span style={{ color: "#FC1503" }}>{searchTerm}</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
  
  )
}

export default SearchFeed