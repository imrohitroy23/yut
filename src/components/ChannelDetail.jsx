import React from "react";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchApi } from "../utils/FetchApi";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
const ChannelDetail = ({setProgress}) => {
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  console.log("adding here" + channelDetail, "videos", videos);
  useEffect(() => {
    setProgress(0)
    FetchApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    
    );
    setProgress(30)
    FetchApi(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data) =>
      setVideos(data?.items)
    );
    setProgress(50)
  }, [id]);
  setProgress(100)

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
